"use strict";
const spotlights = [
    {
        title: "Creative Engineering",
        description: "I craft delightful experiences that bridge design and technology, from immersive data visualizations to polished product prototypes.",
        icon: "🛠️",
        accent: "--accent-1",
    },
    {
        title: "Human-Centered Design",
        description: "Empathy drives my process. I partner with teams to shape stories, workshops, and tools that put people first.",
        icon: "💡",
        accent: "--accent-2",
    },
    {
        title: "Learning in Public",
        description: "Whether speaking, writing, or shipping open-source tools, I believe ideas grow stronger when they are shared.",
        icon: "📣",
        accent: "--accent-3",
    },
];
const journey = [
    {
        year: "Now",
        heading: "Building joyful developer tools",
        body: "Leading cross-functional squads to prototype, validate, and launch workflows that help engineers move faster without burning out.",
    },
    {
        year: "2023",
        heading: "Scaled design systems at startup speed",
        body: "Unified product surfaces with an accessible, themeable system that powered dozens of shipping teams.",
    },
    {
        year: "2021",
        heading: "Graduate researcher & instructor",
        body: "Taught human-computer interaction and led research on collaborative creativity in distributed product teams.",
    },
    {
        year: "2019",
        heading: "Entrepreneurial beginnings",
        body: "Co-founded a student-led studio delivering digital experiences for mission-driven organizations across the Midwest.",
    },
];
const socials = [
    { label: "GitHub", url: "https://github.com/apateluiuc", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/", icon: "linkedin" },
    { label: "Resume", url: "https://apateluiuc.github.io/resume.pdf", icon: "document" },
];
const typedTextConfigs = [];
function createSpotlightCard(item) {
    const card = document.createElement("div");
    card.className = "spotlight-card";
    card.dataset.accent = item.accent;
    const icon = document.createElement("span");
    icon.className = "card-icon";
    icon.textContent = item.icon;
    const title = document.createElement("h3");
    title.textContent = item.title;
    const body = document.createElement("p");
    body.textContent = item.description;
    card.append(icon, title, body);
    return card;
}
function createJourneyItem(item) {
    const wrapper = document.createElement("div");
    wrapper.className = "journey-item";
    const year = document.createElement("div");
    year.className = "journey-year";
    year.textContent = item.year;
    const content = document.createElement("div");
    content.className = "journey-content";
    const heading = document.createElement("h4");
    heading.textContent = item.heading;
    const body = document.createElement("p");
    body.textContent = item.body;
    content.append(heading, body);
    wrapper.append(year, content);
    return wrapper;
}
function renderSpotlights(container) {
    spotlights.forEach((item) => container.appendChild(createSpotlightCard(item)));
}
function renderJourney(container) {
    journey.forEach((item) => container.appendChild(createJourneyItem(item)));
}
function renderSocialLinks(container) {
    socials.forEach((link) => {
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.className = "social-link";
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        const icon = document.createElement("span");
        icon.className = `icon icon-${link.icon}`;
        anchor.append(icon, document.createTextNode(link.label));
        container.appendChild(anchor);
    });
}
function initTypedText(config) {
    typedTextConfigs.push(config);
    let index = 0;
    setInterval(() => {
        index = (index + 1) % config.words.length;
        config.element.dataset.highlight = config.words[index];
    }, config.intervalMs);
}
function registerHoverParallax() {
    const root = document.documentElement;
    const hero = document.querySelector(".hero");
    if (!hero) {
        return;
    }
    hero.addEventListener("pointermove", (event) => {
        const bounds = hero.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
        root.style.setProperty("--pointer-x", offsetX.toString());
        root.style.setProperty("--pointer-y", offsetY.toString());
    });
}
function registerCardTilt() {
    const cards = Array.from(document.querySelectorAll(".spotlight-card"));
    cards.forEach((card) => {
        card.addEventListener("pointermove", (event) => {
            const bounds = card.getBoundingClientRect();
            const tiltX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -12;
            const tiltY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
            card.style.setProperty("--tilt-x", `${tiltX}deg`);
            card.style.setProperty("--tilt-y", `${tiltY}deg`);
        });
        card.addEventListener("pointerleave", () => {
            card.style.setProperty("--tilt-x", "0deg");
            card.style.setProperty("--tilt-y", "0deg");
        });
    });
}
function setTheme(mode) {
    const root = document.documentElement;
    root.dataset.theme = mode;
    localStorage.setItem("preferred-theme", mode);
}
function toggleTheme() {
    const next = document.documentElement.dataset.theme === "midnight" ? "aurora" : "midnight";
    setTheme(next);
}
function restoreTheme() {
    const saved = localStorage.getItem("preferred-theme");
    if (!saved) {
        setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "midnight" : "aurora");
        return;
    }
    setTheme(saved);
}
function enhanceThemeToggle() {
    const toggle = document.querySelector("#theme-toggle");
    if (!toggle) {
        return;
    }
    toggle.addEventListener("click", () => {
        toggleTheme();
        toggle.classList.add("pulse");
        setTimeout(() => toggle.classList.remove("pulse"), 400);
    });
}
function initialize() {
    const spotlightContainer = document.querySelector("#spotlight-grid");
    const journeyContainer = document.querySelector("#journey-timeline");
    const socialContainer = document.querySelector("#social-links");
    const highlightElement = document.querySelector("[data-highlight]");
    if (!spotlightContainer || !journeyContainer || !socialContainer || !highlightElement) {
        return;
    }
    renderSpotlights(spotlightContainer);
    renderJourney(journeyContainer);
    renderSocialLinks(socialContainer);
    initTypedText({
        element: highlightElement,
        words: ["engineer", "designer", "storyteller", "mentor"],
        intervalMs: 2400,
    });
    highlightElement.classList.add("is-focused");
    registerHoverParallax();
    registerCardTilt();
    enhanceThemeToggle();
}
document.addEventListener("DOMContentLoaded", () => {
    restoreTheme();
    initialize();
});
window.addEventListener("focus", () => {
    typedTextConfigs.forEach((config) => {
        config.element.classList.add("is-focused");
    });
});
window.addEventListener("blur", () => {
    typedTextConfigs.forEach((config) => {
        config.element.classList.remove("is-focused");
    });
});
