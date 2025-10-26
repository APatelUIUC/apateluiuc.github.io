# Global Harvest Atlas

A single-page, data-driven story exploring how staple crops and protein preferences have shifted around the world from 1990 to 2020. The experience is fully static, powered by TypeScript-rendered SVGs and expressive CSS to make a GitHub Pages deployment effortless.

## Highlights

- **Immersive hero experience** with layered gradients, animated globe motifs, and a twilight-ready theme toggle.
- **Interactive crop atlas** featuring a stylised world map, timeline scrubber, and responsive detail panel for six spotlight countries.
- **Custom charts without dependencies** – stacked area and multi-series line charts are rendered in SVG directly from TypeScript data structures.
- **Narrative insight cards** that fade into view as you scroll, reinforcing key takeaways and providing editorial context.

## Development

1. Install dependencies (requires Node.js):

   ```bash
   npm install
   ```

2. Compile TypeScript:

   ```bash
   npm run build
   ```

   The compiled JavaScript is emitted to `scripts/` for direct use by `index.html`.

3. Open `index.html` in your browser or serve the directory with any static file server to explore the atlas locally.
