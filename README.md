# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Watch tab (YouTube + Study Pack PDFs)

The **Watch** tab (`#watch`) embeds the channel's Slow Korean Vlog episodes and shows each
episode's free Study Pack PDF directly under the player. It updates automatically:

1. `api/videos.js` (Vercel serverless function) reads the channel's uploads with the
   YouTube Data API v3, drops Shorts (≤ 3 min), and parses the Google Drive / `.pdf` link
   out of each video description. Cached 1 h at the edge.
2. `public/videos.json` is the fallback list when the API key is missing, and also lets you
   override `level` / `pdfUrl` / `pdfEmbedUrl` for a given video id.

**One-time setup:** add `YOUTUBE_API_KEY` in Vercel → Project → Settings → Environment
Variables (see `.env.example`), then redeploy. Without it the site still works from
`public/videos.json`.

**Per upload:** nothing — just keep the `👉 https://drive.google.com/file/d/…/view` PDF link in
the YouTube description and the `(A1–B2)` level in the title. The Drive file must be shared as
"Anyone with the link" for the inline preview to render.
