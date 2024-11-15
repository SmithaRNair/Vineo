import type { Config } from 'drizzle-kit';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Domine: ['Domine','sans-serif'],
      },
      fontSize: {
        '20px': '20px',
        '25px': '25px',
        '32px': '32px',
        '40px': '40px',
        '48px': '48px',
        '45px': '45px',
      },
      // Add the custom backgroundSize here
      backgroundSize: {
        '50p': '50% 50%',
        '70p': '70% 70%',
      },
      colors: {
        vineopink: '#F78A79',
        vineogray: '#394A59',

      },
      backgroundImage: {
        'glass-bottle': 'url(\'/images/glass-bottle.png\')',
        'wines': 'url(\'/images/wines.png\')',
        'bottleglass': 'url(\'/images/bottle&glass.png\')',
        'letter' : 'url(\'/images\letter.png\')',
        'sidebar-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.11) 15%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)',

      },
      backdropBlur: {
        'sidebar-blur': '38px', // Custom blur for the sidebar background
      },
      boxShadow: {
        'sidebar-shadow': '0px 0px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for the sidebar
      },

    },
  },
  plugins: [],
} satisfies Config;
