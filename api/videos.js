/**
 * GET /api/videos
 *
 * Returns the channel's long-form videos (newest first) with the Study Pack PDF
 * link parsed from each video's description, so the "Watch" tab on the site
 * updates by itself whenever a new video is uploaded to YouTube.
 *
 * Setup (one time, in Vercel → Project → Settings → Environment Variables):
 *   YOUTUBE_API_KEY = <YouTube Data API v3 key from Google Cloud Console>
 *
 * How it works
 *   1. Reads the channel's "uploads" playlist via YouTube Data API v3.
 *   2. Drops Shorts (anything ≤ 3 minutes).
 *   3. Finds a Google Drive / .pdf link in the description → Study Pack.
 *   4. Merges manual overrides from /public/videos.json (same videoId wins
 *      for the pdf field) so you can fix a missing PDF link without
 *      editing the YouTube description.
 *   5. Cached at the edge for 1 hour (stale copy served up to 1 day while
 *      refreshing), so the API quota is never a concern.
 *
 * If the key is missing or Google is unreachable, the function returns
 * HTTP 503 and the site silently falls back to /videos.json.
 */

const CHANNEL_ID = "UCPqqPsQiSQYIhWrNXe3XHgA"; // @wonbinssem
const UPLOADS_PLAYLIST = "UU" + CHANNEL_ID.slice(2);
const MIN_SECONDS = 181; // anything shorter is treated as a Short
const API = "https://www.googleapis.com/youtube/v3";

function isoDurationToSeconds(iso) {
  const m = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso || "");
  if (!m) return 0;
  return (+m[1] || 0) * 3600 + (+m[2] || 0) * 60 + (+m[3] || 0);
}

function findPdf(description) {
  const text = description || "";
  // Google Drive: /file/d/<id>/… or ?id=<id>
  const drive =
    /https?:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:[^ \n]*&)?id=)([A-Za-z0-9_-]{10,})/.exec(text);
  if (drive) {
    const id = drive[1];
    return {
      pdfUrl: `https://drive.google.com/file/d/${id}/view`,
      pdfEmbedUrl: `https://drive.google.com/file/d/${id}/preview`,
    };
  }
  // Any direct .pdf link
  const direct = /https?:\/\/[^\s)]+\.pdf(?:\?[^\s)]*)?/i.exec(text);
  if (direct) return { pdfUrl: direct[0], pdfEmbedUrl: direct[0] };
  return { pdfUrl: null, pdfEmbedUrl: null };
}

function parseLevel(title) {
  const m = /\(((?:A|B|C)[12](?:\s*[–-]\s*(?:A|B|C)[12])?)\)/.exec(title || "");
  return m ? m[1].replace(/\s*[–-]\s*/, "–") : null;
}

async function getJSON(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url.split("?")[0]}`);
  return r.json();
}

async function loadOverrides(req) {
  try {
    const proto = req.headers["x-forwarded-proto"] || "https";
    const host = req.headers["x-forwarded-host"] || req.headers.host;
    const r = await fetch(`${proto}://${host}/videos.json`);
    if (!r.ok) return {};
    const j = await r.json();
    const map = {};
    for (const v of j.videos || []) map[v.id] = v;
    return map;
  } catch {
    return {};
  }
}

export default async function handler(req, res) {
  const key = process.env.YOUTUBE_API_KEY;
  if (!key) {
    res.status(503).json({ error: "YOUTUBE_API_KEY is not set" });
    return;
  }

  try {
    // 1) newest 50 uploads
    const list = await getJSON(
      `${API}/playlistItems?part=contentDetails&maxResults=50&playlistId=${UPLOADS_PLAYLIST}&key=${key}`,
    );
    const ids = (list.items || []).map((i) => i.contentDetails.videoId);
    if (ids.length === 0) {
      res.setHeader("Cache-Control", "s-maxage=600");
      res.status(200).json({ source: "youtube", videos: [] });
      return;
    }

    // 2) details (duration, description, thumbnails)
    const details = await getJSON(
      `${API}/videos?part=snippet,contentDetails&id=${ids.join(",")}&key=${key}`,
    );

    const overrides = await loadOverrides(req);

    const videos = (details.items || [])
      .map((v) => {
        const seconds = isoDurationToSeconds(v.contentDetails?.duration);
        const t = v.snippet?.thumbnails || {};
        const thumb = (t.maxres || t.standard || t.high || t.medium || t.default || {}).url || null;
        const pdf = findPdf(v.snippet?.description);
        const o = overrides[v.id] || {};
        return {
          id: v.id,
          title: v.snippet?.title || "",
          publishedAt: v.snippet?.publishedAt || null,
          seconds,
          thumbnail: thumb,
          level: o.level || parseLevel(v.snippet?.title),
          pdfUrl: o.pdfUrl || pdf.pdfUrl,
          pdfEmbedUrl: o.pdfEmbedUrl || pdf.pdfEmbedUrl,
        };
      })
      .filter((v) => v.seconds >= MIN_SECONDS)
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
    res.status(200).json({ source: "youtube", updatedAt: new Date().toISOString(), videos });
  } catch (err) {
    res.setHeader("Cache-Control", "no-store");
    res.status(503).json({ error: String(err && err.message ? err.message : err) });
  }
}
