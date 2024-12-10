/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        popup: "popup 1s ease-out",
        "popup-delayed": "popup 1s ease-out 0.3s",
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      
    },
  },
  plugins: [],
};

