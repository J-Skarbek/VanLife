/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tan: '#FFF7ED',
        brandOrange: '#FF8C38',
        offBlack: '#252525',
        offGray: '#AAAAAA'
      },
      backgroundImage: {
        'home-hero': "url('/hero-images/homePage-heroImg.jpg')",
        'about-hero': "url('/hero-images/aboutPage-heroImg.jpg')",
      }
    },
  },
  plugins: [],
}

