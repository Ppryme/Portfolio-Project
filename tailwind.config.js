/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 👈 enables manual dark mode using the 'dark' class
 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        secondary: {
          light: "#FFFFFF",
          dark: "#102D44", // your dark background
        },
      },
    },
  },
  plugins: [],
}
