import React, { useRef, useEffect, useState } from "react";

export default function StackingSection({
    children,
    zIndex,
}: {
    children: React.ReactNode;
    zIndex: number;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [styles, setStyles] = useState({});

    useEffect(() => {
        const onScroll = () => {
            if (!ref.current) return;

            // Get the bounding rect of this section
            const myRect = ref.current.getBoundingClientRect();

            // We need to measure how far the NEXT stackable sibling is scrolling over us.
            // Since all stacking sections will be sticky at top 0, we can define the overlap
            // distance as how far `window.scrollY` is past our original offset top, comparing the height.
            // However, a simpler generic approach for sibling stacks:
            // The next sibling element in the DOM:
            const nextSibling = ref.current.nextElementSibling as HTMLElement;
            if (!nextSibling) {
                // We are the last section in the stack; we don't get covered by anything.
                setStyles({});
                return;
            }

            const nextRect = nextSibling.getBoundingClientRect();
            const windowH = window.innerHeight;

            // Only animate if we are currently "sticky" (at or near top=0)
            if (myRect.top <= 1) {
                // As the next section scrolls up, its top goes from windowH down to 0.
                // Once nextRect.top reaches 0, we are fully covered.
                if (nextRect.top <= windowH && nextRect.top >= 0) {
                    const progress = 1 - (nextRect.top / windowH);

                    const scale = 1 - (0.1 * progress);
                    const blur = 10 * progress;
                    const opacity = 1 - (0.5 * progress);

                    setStyles({
                        transform: `scale(${scale})`,
                        filter: `blur(${blur}px)`,
                        opacity: opacity,
                        transformOrigin: "center top",
                    });
                } else if (nextRect.top < 0) {
                    // completely covered
                    setStyles({
                        transform: `scale(0.9)`,
                        filter: `blur(10px)`,
                        opacity: 0.5,
                        transformOrigin: "center top",
                    });
                } else {
                    setStyles({});
                }
            } else {
                setStyles({});
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        // Trigger once on mount
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div
            ref={ref}
            className={`sticky top-0 w-full min-h-screen border-b border-[#FFFFFF05] overflow-hidden bg-[#0F0F0F] z-[${zIndex}] flex items-center shadow-[0_30px_60px_rgba(0,0,0,0.8)] transition-all duration-75`}
            style={{
                ...styles,
                zIndex,
            }}
        >
            <div className="w-full h-full flex items-center">
                {children}
            </div>
        </div>
    );
}
