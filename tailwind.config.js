/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "960px",
      lg: "1280px",
      xl: "1600px",
    },
    extend: {
      colors: {
        backgroundButton: "#4CFDC7",
        backgroundButtonHover: "#66c4a8",
        gray: "#27272A",
        black: "#18181b",
        backgroundGray: "#A1A1AA",
        tableRed: "#F43F5E",
        tableGreen: "#10B981",
      },
      maxWidth: {
        desktop: "1600px",
        largeLaptop: "1280px",
        laptop: "960px",
        tablet: "640px",
      },
    },
  },
};
