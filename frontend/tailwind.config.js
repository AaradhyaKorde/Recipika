/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   primary: "#ffffff",
      //   secondary: "#ffffff",
      //   tertiary: "#ffffff",
      // }
      backgroundImage:{
        "addFormBg":"url('/src/images/addFormBackground.jpg')",
        "logoImg":"url('/src/images/recipika.png')"
      }
    },
  },
  plugins: [],
}