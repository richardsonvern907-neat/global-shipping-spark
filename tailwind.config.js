/** @type {import("tailwindcss").Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eagle: {
          blue: "#003087",
          gold: "#FFD700",
          silver: "#C0C0C0",
          dark: "#0a192f",
        },
      },
    },
  },
  plugins: [],
};
