/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: '#FFF7ED'
      },
      backgroundImage: {
        'home-hero': "url('public/hero-images/homePage-heroImg.jpg')",
        'about-hero': "url('public/hero-images/aboutPage-heroImg.jpg')",
      }
    },
  },
  plugins: [],
}

