//JAvascript is to be implemented after the website is finished and Backend is established




if (typeof ScrollTimeline !== "undefined") {
    // Astro Guard Scroll Animation
    const astroGuardTimeline = new ScrollTimeline({
        scrollSource: document.scrollingElement,
        timeRange: 1,
        orientation: "block",
        fill: "both"
    });

    document.querySelector("#astro-guard").animate(
        [
            { opacity: 0, transform: "translateY(100px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            timeline: astroGuardTimeline
        }
    );

    // Description Paragraph Scroll Animation
    const descriptionTimeline = new ScrollTimeline({
        scrollSource: document.scrollingElement,
        timeRange: 1,
        orientation: "block",
        fill: "both"
    });

    document.querySelector("#description-paragraph").animate(
        [
            { opacity: 0, transform: "translateY(100px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            timeline: descriptionTimeline
        }
    );

    // Table Section Scroll Animation
    const tableTimeline = new ScrollTimeline({
        scrollSource: document.scrollingElement,
        timeRange: 1,
        orientation: "block",
        fill: "both"
    });

    document.querySelector(".table-section").animate(
        [
            { opacity: 0, transform: "translateY(100px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            timeline: tableTimeline
        }
    );

    // Retro Display Scroll Animation
    const retroDisplayTimeline = new ScrollTimeline({
        scrollSource: document.scrollingElement,
        timeRange: 1,
        orientation: "block",
        fill: "both"
    });

    document.querySelector(".retro-display").animate(
        [
            { opacity: 0, transform: "translateY(100px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        {
            timeline: retroDisplayTimeline
        }
    );
} else {
    alert("Scroll Timeline API is not supported in this browser.");
}
