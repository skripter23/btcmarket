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
