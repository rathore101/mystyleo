/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          first: "#2e2c2d",
          second: "#697177",
          secondHO: "#636c72",
          secondH: "#848b90",
          third: "#3f3d3e",
          four: "#fff",
          fourH: "#e3dbdf",
          five: "",
        },
      },
      screens: {
        xm: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
