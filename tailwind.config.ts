import type { Config } from "tailwindcss";
import { colors, spacing, layout } from "./src/tokens";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors,
      fontFamily: {
        display: ["Sora", "system-ui", "sans-serif"],
        body: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
      spacing: {
        "ds-1": spacing["space-1"],
        "ds-2": spacing["space-2"],
        "ds-3": spacing["space-3"],
        "ds-4": spacing["space-4"],
      },
      maxWidth: {
        texto: layout["largura-texto"],
      },
      borderWidth: {
        divisoria: layout["divisoria"],
      },
    },
  },
  plugins: [],
} satisfies Config;
