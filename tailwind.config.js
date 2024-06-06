/** @type {import('tailwindcss').Config} */
// import acorn from "./src/assets/fonts/acorn.woff";
// import gt from "./src/assets/fonts/gt.woff";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      gridTemplateColumns: {
        "70-30": "70% 28%",
      },
    },
  },
  plugins: [],
};
