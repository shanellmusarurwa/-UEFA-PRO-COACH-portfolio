/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        dark: "#0b0a09",
        card: "#141210",
        "card-light": "#1f1b18",
        "border-dark": "#2a2622",
      },
    },
  },
  plugins: [],
};

export default config;
