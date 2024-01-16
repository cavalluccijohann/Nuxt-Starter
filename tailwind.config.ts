import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        main: "var(--main-color)",
        muted: "var(--muted)",
        inverted: "var(--inverted)",
        "text-color": "var(--text-color)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-faded": "var(--accent-faded)",
      },
    },
  },
  plugins: [],
} satisfies Config;
