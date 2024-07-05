/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Color: '#6711fc', // Tailwind purple-500
      },
      backgroundImage: {
        'color-gradient': 'var(--color-gradient)',
      },
      keyframes: {
        imgUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        imgUp: 'imgUp 0.7s linear infinite alternate',
      },
      fontFamily: {
        roboto: [ "Roboto", "sans-serif"],
        mons: ["Montserrat", "sans-serif"]
      }
     
    },
  },
  plugins: [],
}

