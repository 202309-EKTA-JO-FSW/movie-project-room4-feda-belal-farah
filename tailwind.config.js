/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundImage: {
        glow: "linear-gradient(45deg,#CA4246 16.666%, #E16541 16.666%, #E16541 33.333%, #F18F43 33.333%, #F18F43 50%, #8B9862 50%, #8B9862 66.666%, #476098 66.666%, #476098 83.333%, #A7489B 83.333%)",
      },
      animation: {
        "move-out": "rainbow-out 0.3s ease-in forwards",
        "move-in": "rainbow-in 0.5s ease forwards",
      },
      keyframes: {
        "rainbow-out": {
          "0% ": { "background-size": "100%" },
          "80%": { "background-size": "650%" },
          "100%": { "background-size": "650%" },
        },
        "rainbow-in": {
          "0% ": { "background-size": "650%" },
          "40%": { "background-size": "650%" },
          "100%": { "background-size": "100%" },
        },
      },
    },
    plugins: [],
  },
}
