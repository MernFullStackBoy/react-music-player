/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url(./src/image/photo.avif)"
      },
      animation: {
        "spin-slow": "spin 5s linear infinite"
      }
    },
  },
  plugins: [],
}