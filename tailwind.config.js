/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeGrey900: "#1a1a1b",
        themeGrey500: "#272729",
        themeGrey300: "#898989",
        themeGrey200: "#dae0e6",
        themeGrey100: "#f6f7f8",
        themeOrange: "#ff4500",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /^(bg|text)-theme.*/,
    },
  ],
};
