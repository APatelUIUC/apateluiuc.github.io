"use strict";
const crops = ["wheat", "rice", "maize"];
const countries = [
    {
        id: "usa",
        name: "United States",
        region: "North America",
        lat: 38.0,
        lon: -97.0,
        narrative: "Maize dominance powers global feed and ethanol chains, while wheat output plateaus.",
    },
    {
        id: "chn",
        name: "China",
        region: "East Asia",
        lat: 35.0,
        lon: 103.0,
        narrative: "Rice remains foundational, yet surging maize output fuels livestock growth.",
    },
    {
        id: "ind",
        name: "India",
        region: "South Asia",
        lat: 22.0,
        lon: 79.0,
        narrative: "Green Revolution gains continue with wheat and rice, but maize lags by comparison.",
    },
    {
        id: "bra",
        name: "Brazil",
        region: "South America",
        lat: -10.0,
        lon: -52.0,
        narrative: "Tropical maize explodes alongside soy, repositioning Brazil as a feed giant.",
    },
    {
        id: "nga",
        name: "Nigeria",
        region: "West Africa",
        lat: 9.0,
        lon: 8.0,
        narrative: "Cassava leads locally, but maize and rice uptake illustrate urban demand for calories.",
    },
    {
        id: "fra",
        name: "France",
        region: "Western Europe",
        lat: 46.0,
        lon: 2.0,
        narrative: "High-yield wheat anchors exports, even as dietary shifts moderate domestic demand.",
    },
];
const harvestTimeline = [
    {
        year: 1990,
        values: {
            usa: { wheat: 62, rice: 6, maize: 200 },
            chn: { wheat: 98, rice: 178, maize: 98 },
            ind: { wheat: 55, rice: 114, maize: 8 },
            bra: { wheat: 2, rice: 10, maize: 24 },
            nga: { wheat: 0.15, rice: 3, maize: 6 },
            fra: { wheat: 36, rice: 0.1, maize: 12 },
        },
    },
    {
        year: 1995,
        values: {
            usa: { wheat: 60, rice: 6.5, maize: 235 },
            chn: { wheat: 104, rice: 184, maize: 112 },
            ind: { wheat: 61, rice: 121, maize: 10 },
            bra: { wheat: 3, rice: 10.5, maize: 28 },
            nga: { wheat: 0.18, rice: 3.6, maize: 7 },
            fra: { wheat: 37, rice: 0.1, maize: 13 },
        },
    },
    {
        year: 2000,
        values: {
            usa: { wheat: 58, rice: 6.8, maize: 250 },
            chn: { wheat: 100, rice: 182, maize: 125 },
            ind: { wheat: 65, rice: 125, maize: 12 },
            bra: { wheat: 4, rice: 11, maize: 33 },
            nga: { wheat: 0.19, rice: 4, maize: 7.5 },
            fra: { wheat: 38, rice: 0.1, maize: 13.5 },
        },
    },
    {
        year: 2005,
        values: {
            usa: { wheat: 58, rice: 7, maize: 280 },
            chn: { wheat: 96, rice: 184, maize: 145 },
            ind: { wheat: 69, rice: 130, maize: 14 },
            bra: { wheat: 5, rice: 12, maize: 42 },
            nga: { wheat: 0.2, rice: 4.5, maize: 8 },
            fra: { wheat: 39, rice: 0.1, maize: 15 },
        },
    },
    {
        year: 2010,
        values: {
            usa: { wheat: 60, rice: 7.2, maize: 315 },
            chn: { wheat: 115, rice: 197, maize: 175 },
            ind: { wheat: 86, rice: 146, maize: 18 },
            bra: { wheat: 5.5, rice: 11, maize: 57 },
            nga: { wheat: 0.16, rice: 5.5, maize: 9 },
            fra: { wheat: 37, rice: 0.08, maize: 15.5 },
        },
    },
    {
        year: 2015,
        values: {
            usa: { wheat: 56, rice: 7.8, maize: 345 },
            chn: { wheat: 130, rice: 208, maize: 210 },
            ind: { wheat: 95, rice: 161, maize: 24 },
            bra: { wheat: 5.8, rice: 11.2, maize: 79 },
            nga: { wheat: 0.1, rice: 6.5, maize: 10.5 },
            fra: { wheat: 33, rice: 0.07, maize: 16 },
        },
    },
    {
        year: 2020,
        values: {
            usa: { wheat: 49, rice: 10, maize: 360 },
            chn: { wheat: 135, rice: 212, maize: 260 },
            ind: { wheat: 108, rice: 178, maize: 29 },
            bra: { wheat: 6, rice: 11, maize: 102 },
            nga: { wheat: 0.06, rice: 8, maize: 12 },
            fra: { wheat: 30, rice: 0.05, maize: 17 },
        },
    },
];
const proteinTimeline = [
    {
        year: 1990,
        values: { usa: 110, chn: 25, ind: 5, bra: 55, nga: 8, fra: 95 },
    },
    {
        year: 1995,
        values: { usa: 114, chn: 33, ind: 6, bra: 60, nga: 8.5, fra: 98 },
    },
    {
        year: 2000,
        values: { usa: 118, chn: 39, ind: 7, bra: 67, nga: 9, fra: 100 },
    },
    {
        year: 2005,
        values: { usa: 120, chn: 45, ind: 8, bra: 78, nga: 10, fra: 98 },
    },
    {
        year: 2010,
        values: { usa: 123, chn: 55, ind: 9, bra: 86, nga: 11, fra: 93 },
    },
    {
        year: 2015,
        values: { usa: 124, chn: 63, ind: 10, bra: 92, nga: 12, fra: 89 },
    },
    {
        year: 2020,
        values: { usa: 127, chn: 75, ind: 11, bra: 99, nga: 13, fra: 86 },
    },
];
const highlightInsights = [
    {
        year: 1990,
        descriptor: "A world of wheat",
        body: "North Atlantic exporters dominate calories while emerging economies build self-sufficiency.",
    },
    {
        year: 2005,
        descriptor: "Maize momentum",
        body: "China and Brazil accelerate livestock feed output, closing the gap with U.S. surpluses.",
    },
    {
        year: 2020,
        descriptor: "Rice resilience",
        body: "Asia's megacities depend on diversified harvests as diets layer in more protein-rich staples.",
    },
];
const deepInsights = [
    {
        title: "Feed vs. food",
        summary: "Maize surges faster than population growth",
        detail: "In 2020, the atlas countries harvest 833 million tonnes of maize—over triple their 1990 output—driven by feed demand and ethanol policies.",
    },
    {
        title: "Dietary tipping point",
        summary: "China's meat intake now rivals Europe",
        detail: "Chinese per capita meat availability hits 75 kg, brushing past France's 86 kg as poultry and pork consumption accelerate in urban centers.",
    },
    {
        title: "Resilience gap",
        summary: "Nigeria's staples diversify slowly",
        detail: "Despite doubling rice harvests, Nigeria still imports to satisfy cities—maize gains buffer volatility but highlight infrastructure needs.",
    },
];
const cropNames = {
    wheat: "Wheat",
    rice: "Rice",
    maize: "Maize",
};
const cropPalette = {
    wheat: "var(--accent-1)",
    rice: "var(--accent-2)",
    maize: "var(--accent-3)",
};
const countryPalette = {
    usa: "#2778c4",
    chn: "#e85d66",
    ind: "#f2a65a",
    bra: "#43b892",
    nga: "#9c6fe4",
    fra: "#5f6dd9",
};
const continentContours = [
    [
        "North America",
        [
            [-168, 72],
            [-141, 70],
            [-120, 65],
            [-96, 78],
            [-60, 72],
            [-52, 60],
            [-75, 48],
            [-100, 32],
            [-120, 24],
            [-140, 25],
            [-150, 35],
            [-168, 72],
        ],
    ],
    [
        "South America",
        [
            [-82, 12],
            [-70, 5],
            [-75, -15],
            [-68, -36],
            [-52, -50],
            [-40, -55],
            [-35, -30],
            [-60, 5],
            [-66, 10],
            [-82, 12],
        ],
    ],
    [
        "Europe",
        [
            [-10, 72],
            [10, 70],
            [30, 64],
            [40, 56],
            [30, 44],
            [20, 40],
            [0, 36],
            [-12, 38],
            [-10, 72],
        ],
    ],
    [
        "Africa",
        [
            [-20, 34],
            [12, 37],
            [28, 32],
            [40, 20],
            [46, 5],
            [32, -35],
            [18, -36],
            [12, -28],
            [-10, -35],
            [-20, 34],
        ],
    ],
    [
        "Asia",
        [
            [30, 72],
            [60, 76],
            [96, 70],
            [134, 60],
            [150, 38],
            [132, 16],
            [100, 0],
            [72, 8],
            [60, 20],
            [48, 34],
            [30, 72],
        ],
    ],
    [
        "Oceania",
        [
            [110, -5],
            [134, -10],
            [150, -25],
            [148, -44],
            [126, -42],
            [110, -28],
            [110, -5],
        ],
    ],
];
const svgNamespace = "http://www.w3.org/2000/svg";
let activeYearIndex = harvestTimeline.length - 1;
const bubbleElements = new Map();
let bubbleLayer = null;
let labelLayer = null;
function projectPoint(lon, lat, width, height) {
    const x = ((lon + 180) / 360) * width;
    const y = ((90 - lat) / 180) * height;
    return { x, y };
}
function buildPath(points, width, height) {
    return points
        .map((coord, index) => {
        const { x, y } = projectPoint(coord[0], coord[1], width, height);
        const command = index === 0 ? "M" : "L";
        return `${command}${x.toFixed(1)},${y.toFixed(1)}`;
    })
        .join(" ");
}
function renderBaseMap(svg) {
    const viewBox = svg.viewBox.baseVal;
    const landLayer = document.createElementNS(svgNamespace, "g");
    landLayer.setAttribute("fill", "none");
    continentContours.forEach(([, points]) => {
        const path = document.createElementNS(svgNamespace, "path");
        path.setAttribute("d", buildPath(points, viewBox.width, viewBox.height));
        path.classList.add("map-land");
        landLayer.appendChild(path);
    });
    bubbleLayer = document.createElementNS(svgNamespace, "g");
    labelLayer = document.createElementNS(svgNamespace, "g");
    bubbleLayer.setAttribute("id", "bubble-layer");
    labelLayer.setAttribute("id", "label-layer");
    svg.appendChild(landLayer);
    svg.appendChild(bubbleLayer);
    svg.appendChild(labelLayer);
}
function totalForCountry(snapshot, country) {
    const values = snapshot.values[country];
    return crops.reduce((total, crop) => total + values[crop], 0);
}
function dominantCrop(snapshot, country) {
    const entries = Object.entries(snapshot.values[country]);
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0][0];
}
function computeGlobalTotals(snapshot) {
    return crops.reduce((acc, crop) => {
        acc[crop] = countries.reduce((sum, country) => sum + snapshot.values[country.id][crop], 0);
        return acc;
    }, {});
}
function computeMaxProduction() {
    return Math.max(...harvestTimeline.flatMap((snapshot) => countries.map((country) => totalForCountry(snapshot, country.id))));
}
function updateBubbles(snapshot) {
    if (!bubbleLayer || !labelLayer) {
        return;
    }
    const viewBox = bubbleLayer.ownerSVGElement.viewBox.baseVal;
    const maxProduction = computeMaxProduction();
    countries.forEach((country) => {
        var _a, _b;
        let circle = (_a = bubbleElements.get(country.id)) === null || _a === void 0 ? void 0 : _a.circle;
        let label = (_b = bubbleElements.get(country.id)) === null || _b === void 0 ? void 0 : _b.label;
        if (!circle || !label) {
            circle = document.createElementNS(svgNamespace, "circle");
            circle.classList.add("map-bubble");
            circle.setAttribute("data-country", country.id);
            circle.setAttribute("tabindex", "0");
            circle.addEventListener("mouseenter", () => renderCountryDetail(harvestTimeline[activeYearIndex], country));
            circle.addEventListener("focus", () => renderCountryDetail(harvestTimeline[activeYearIndex], country));
            circle.addEventListener("mouseleave", () => renderDetailPanel(harvestTimeline[activeYearIndex]));
            circle.addEventListener("blur", () => renderDetailPanel(harvestTimeline[activeYearIndex]));
            bubbleLayer.appendChild(circle);
            label = document.createElementNS(svgNamespace, "text");
            label.classList.add("map-label");
            labelLayer.appendChild(label);
            bubbleElements.set(country.id, { circle, label });
        }
        const { x, y } = projectPoint(country.lon, country.lat, viewBox.width, viewBox.height);
        const total = totalForCountry(snapshot, country.id);
        const radius = Math.max(8, Math.sqrt(total / maxProduction) * 60);
        const dominant = dominantCrop(snapshot, country.id);
        circle.setAttribute("cx", x.toFixed(1));
        circle.setAttribute("cy", y.toFixed(1));
        circle.setAttribute("r", radius.toFixed(1));
        circle.style.fill = cropPalette[dominant];
        label.setAttribute("x", x.toFixed(1));
        label.setAttribute("y", (y - radius - 6).toFixed(1));
        label.textContent = country.name;
    });
}
function renderCountryDetail(snapshot, country) {
    const details = document.getElementById("map-details");
    if (!details) {
        return;
    }
    const cropsList = crops
        .map((crop) => {
        const amount = snapshot.values[country.id][crop];
        return `<div class="map-detail-item"><span>${cropNames[crop]}</span><strong>${amount.toFixed(1)} Mt</strong></div>`;
    })
        .join("");
    details.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.narrative}</p>
    <div class="map-detail-list">${cropsList}</div>
  `;
}
function renderDetailPanel(snapshot) {
    const details = document.getElementById("map-details");
    if (!details) {
        return;
    }
    const totals = computeGlobalTotals(snapshot);
    const totalTonnage = Object.values(totals).reduce((sum, value) => sum + value, 0);
    const leader = [...countries]
        .map((country) => ({
        name: country.name,
        value: totalForCountry(snapshot, country.id),
        dominant: dominantCrop(snapshot, country.id),
    }))
        .sort((a, b) => b.value - a.value)
        .slice(0, 3);
    details.innerHTML = `
    <h3>${snapshot.year} overview</h3>
    <p>Total staple harvest among focus countries reaches <strong>${totalTonnage.toFixed(0)} million tonnes</strong>.</p>
    <div class="map-detail-list">
      ${crops
        .map((crop) => `
          <div class="map-detail-item">
            <span>${cropNames[crop]}</span>
            <strong>${totals[crop].toFixed(0)} Mt</strong>
          </div>
        `)
        .join("")}
    </div>
    <p><strong>Leaders:</strong> ${leader
        .map((item) => `${item.name} (${item.dominant === "maize" ? "maize" : cropNames[item.dominant].toLowerCase()})`)
        .join(", ")}</p>
  `;
}
function initTimelineControls() {
    const slider = document.getElementById("year-range");
    const ticks = document.getElementById("timeline-ticks");
    if (!slider || !ticks) {
        return;
    }
    slider.max = (harvestTimeline.length - 1).toString();
    slider.value = activeYearIndex.toString();
    ticks.innerHTML = harvestTimeline
        .map((snapshot, index) => `<span data-index="${index}">${snapshot.year}</span>`)
        .join("");
    Array.from(ticks.querySelectorAll("span")).forEach((tick) => {
        tick.style.cursor = "pointer";
        tick.addEventListener("click", () => {
            var _a;
            const index = Number.parseInt((_a = tick.dataset.index) !== null && _a !== void 0 ? _a : "0", 10);
            activeYearIndex = index;
            slider.value = activeYearIndex.toString();
            updateBubbles(harvestTimeline[activeYearIndex]);
            renderDetailPanel(harvestTimeline[activeYearIndex]);
            updateTickHighlight();
        });
    });
    slider.addEventListener("input", () => {
        activeYearIndex = Number.parseInt(slider.value, 10);
        updateBubbles(harvestTimeline[activeYearIndex]);
        renderDetailPanel(harvestTimeline[activeYearIndex]);
        updateTickHighlight();
    });
}
function updateTickHighlight() {
    const ticks = Array.from(document.querySelectorAll("#timeline-ticks span"));
    ticks.forEach((tick) => {
        var _a, _b;
        tick.style.color = Number.parseInt((_a = tick.dataset.index) !== null && _a !== void 0 ? _a : "0", 10) === activeYearIndex ? "var(--accent-1)" : "";
        tick.style.fontWeight = Number.parseInt((_b = tick.dataset.index) !== null && _b !== void 0 ? _b : "0", 10) === activeYearIndex ? "700" : "500";
    });
}
function renderSnapshotInsights() {
    const container = document.getElementById("insight-grid");
    if (!container) {
        return;
    }
    container.innerHTML = highlightInsights
        .map((insight) => {
        var _a;
        const snapshot = (_a = harvestTimeline.find((item) => item.year === insight.year)) !== null && _a !== void 0 ? _a : harvestTimeline[0];
        const totals = computeGlobalTotals(snapshot);
        const total = Object.values(totals).reduce((sum, value) => sum + value, 0);
        return `
        <article class="insight-card fade-in">
          <span>${insight.year}</span>
          <strong>${total.toFixed(0)} Mt</strong>
          <p class="insight-card__descriptor">${insight.descriptor}</p>
          <p class="insight-card__body">${insight.body}</p>
        </article>
      `;
    })
        .join("");
}
function createAxis(svg, { width, height }, margin, maxY) {
    const axisLayer = document.createElementNS(svgNamespace, "g");
    axisLayer.classList.add("chart-axis");
    const xAxis = document.createElementNS(svgNamespace, "line");
    xAxis.setAttribute("x1", margin.left.toString());
    xAxis.setAttribute("x2", (width - margin.right).toString());
    xAxis.setAttribute("y1", (height - margin.bottom).toString());
    xAxis.setAttribute("y2", (height - margin.bottom).toString());
    axisLayer.appendChild(xAxis);
    const yAxis = document.createElementNS(svgNamespace, "line");
    yAxis.setAttribute("x1", margin.left.toString());
    yAxis.setAttribute("x2", margin.left.toString());
    yAxis.setAttribute("y1", margin.top.toString());
    yAxis.setAttribute("y2", (height - margin.bottom).toString());
    axisLayer.appendChild(yAxis);
    const gridLayer = document.createElementNS(svgNamespace, "g");
    gridLayer.classList.add("chart-gridlines");
    const steps = 4;
    for (let i = 0; i <= steps; i += 1) {
        const value = (maxY / steps) * i;
        const y = height - margin.bottom - (value / maxY) * (height - margin.top - margin.bottom);
        const line = document.createElementNS(svgNamespace, "line");
        line.setAttribute("x1", margin.left.toString());
        line.setAttribute("x2", (width - margin.right).toString());
        line.setAttribute("y1", y.toString());
        line.setAttribute("y2", y.toString());
        gridLayer.appendChild(line);
        const label = document.createElementNS(svgNamespace, "text");
        label.setAttribute("x", (margin.left - 8).toString());
        label.setAttribute("y", (y - 4).toString());
        label.setAttribute("text-anchor", "end");
        label.textContent = value.toFixed(0);
        gridLayer.appendChild(label);
    }
    svg.appendChild(gridLayer);
    svg.appendChild(axisLayer);
}
function renderStapleChart() {
    var _a;
    const svg = document.getElementById("staple-chart");
    if (!svg) {
        return;
    }
    const viewBox = svg.viewBox.baseVal;
    const margin = { top: 48, right: 24, bottom: 48, left: 68 };
    const chartWidth = viewBox.width - margin.left - margin.right;
    const chartHeight = viewBox.height - margin.top - margin.bottom;
    const years = harvestTimeline.map((snapshot) => snapshot.year);
    const totalsByCrop = {
        wheat: [],
        rice: [],
        maize: [],
    };
    harvestTimeline.forEach((snapshot) => {
        const totals = computeGlobalTotals(snapshot);
        crops.forEach((crop) => totalsByCrop[crop].push(totals[crop]));
    });
    const maxTotal = Math.max(...harvestTimeline.map((snapshot) => Object.values(computeGlobalTotals(snapshot)).reduce((sum, value) => sum + value, 0)));
    createAxis(svg, viewBox, margin, maxTotal);
    const x = (year) => {
        const ratio = (year - years[0]) / (years[years.length - 1] - years[0]);
        return margin.left + ratio * chartWidth;
    };
    const y = (value) => margin.top + (1 - value / maxTotal) * chartHeight;
    const baseline = new Array(years.length).fill(0);
    crops.forEach((crop) => {
        const area = document.createElementNS(svgNamespace, "path");
        area.classList.add("chart-area");
        area.style.fill = cropPalette[crop];
        const top = [];
        const bottom = [];
        totalsByCrop[crop].forEach((value, index) => {
            const start = baseline[index];
            const end = start + value;
            bottom.push(start);
            top.push(end);
            baseline[index] = end;
        });
        const pathParts = [];
        top.forEach((value, index) => {
            pathParts.push(`${index === 0 ? "M" : "L"}${x(years[index]).toFixed(2)},${y(value).toFixed(2)}`);
        });
        for (let i = years.length - 1; i >= 0; i -= 1) {
            pathParts.push(`L${x(years[i]).toFixed(2)},${y(bottom[i]).toFixed(2)}`);
        }
        pathParts.push("Z");
        area.setAttribute("d", pathParts.join(" "));
        svg.appendChild(area);
    });
    const legend = document.createElement("div");
    legend.className = "chart-legend";
    legend.innerHTML = crops
        .map((crop) => `<span style="color:${cropPalette[crop]}">${cropNames[crop]}</span>`)
        .join("");
    (_a = svg.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(legend);
}
function renderProteinChart() {
    var _a;
    const svg = document.getElementById("protein-chart");
    if (!svg) {
        return;
    }
    const viewBox = svg.viewBox.baseVal;
    const margin = { top: 48, right: 80, bottom: 48, left: 68 };
    const chartWidth = viewBox.width - margin.left - margin.right;
    const chartHeight = viewBox.height - margin.top - margin.bottom;
    const years = proteinTimeline.map((snapshot) => snapshot.year);
    const maxY = Math.max(...proteinTimeline.map((snapshot) => Math.max(...Object.values(snapshot.values))));
    createAxis(svg, viewBox, margin, maxY);
    const x = (year) => {
        const ratio = (year - years[0]) / (years[years.length - 1] - years[0]);
        return margin.left + ratio * chartWidth;
    };
    const y = (value) => margin.top + (1 - value / maxY) * chartHeight;
    countries.forEach((country) => {
        const path = document.createElementNS(svgNamespace, "path");
        path.classList.add("chart-line");
        path.setAttribute("stroke", countryPalette[country.id]);
        const points = proteinTimeline.map((snapshot) => snapshot.values[country.id]);
        const instructions = points
            .map((value, index) => `${index === 0 ? "M" : "L"}${x(years[index]).toFixed(2)},${y(value).toFixed(2)}`)
            .join(" ");
        path.setAttribute("d", instructions);
        svg.appendChild(path);
        const lastYear = years[years.length - 1];
        const lastValue = points[points.length - 1];
        const label = document.createElementNS(svgNamespace, "text");
        label.setAttribute("x", (x(lastYear) + 6).toString());
        label.setAttribute("y", y(lastValue).toString());
        label.setAttribute("alignment-baseline", "middle");
        label.setAttribute("fill", countryPalette[country.id]);
        label.textContent = country.name;
        svg.appendChild(label);
    });
    const legend = document.createElement("div");
    legend.className = "chart-legend";
    legend.innerHTML = countries
        .map((country) => `<span style="color:${countryPalette[country.id]}">${country.name}</span>`)
        .join("");
    (_a = svg.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(legend);
}
function renderDeepInsights() {
    const container = document.getElementById("insight-cards");
    if (!container) {
        return;
    }
    container.innerHTML = deepInsights
        .map((insight) => `
        <article class="deep-insight fade-in">
          <h3>${insight.title}</h3>
          <p><strong>${insight.summary}</strong></p>
          <p>${insight.detail}</p>
          <footer>Hover to reveal context</footer>
        </article>
      `)
        .join("");
}
function initThemeToggle() {
    var _a;
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) {
        return;
    }
    const preferred = (_a = localStorage.getItem("atlas-theme")) !== null && _a !== void 0 ? _a : "atlas";
    document.documentElement.dataset.theme = preferred === "twilight" ? "twilight" : "atlas";
    toggle.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "twilight" ? "atlas" : "twilight";
        document.documentElement.dataset.theme = next;
        localStorage.setItem("atlas-theme", next);
    });
}
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, { threshold: 0.2 });
    document.querySelectorAll(".fade-in").forEach((element) => observer.observe(element));
}
function initialiseAtlas() {
    initThemeToggle();
    renderSnapshotInsights();
    renderDeepInsights();
    const map = document.getElementById("world-map");
    if (map) {
        renderBaseMap(map);
        updateBubbles(harvestTimeline[activeYearIndex]);
        renderDetailPanel(harvestTimeline[activeYearIndex]);
    }
    initTimelineControls();
    updateTickHighlight();
    renderStapleChart();
    renderProteinChart();
    initScrollAnimations();
}
document.addEventListener("DOMContentLoaded", initialiseAtlas);
