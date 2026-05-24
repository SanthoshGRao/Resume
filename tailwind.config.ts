import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        panel: "var(--panel)",
        border: "var(--border)",
        background: "var(--background)",
        accent: "var(--accent)",
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        blink: {
          'from, to': { borderColor: 'transparent' },
          '50%': { borderColor: 'currentColor' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
