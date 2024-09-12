// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '98vh': '98vh', // Custom height utility for 98% of the viewport height
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))", // Radial gradient utility
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", // Conic gradient utility
      },
      colors: {
        bgblue: '#ecfeff', // Custom color named 'bgblue'
        iconcolor: '#2b6cb0', // Custom color named 'icon_color' for icons
      },
    },
  },
  plugins: [],
};
