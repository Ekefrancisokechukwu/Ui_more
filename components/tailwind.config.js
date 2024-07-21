/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        spring: "cubic-bezier(0.5, -0.5, 0.5, 1.5)",
      },

      animation: {
        spring: "spring 1s cubic-bezier(0.5, -0.5, 0.5, 1.5)",
      },
    },
  },
  plugins: [],
};
