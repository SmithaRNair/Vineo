import type { Config } from 'drizzle-kit';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
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
      },

    },
  },
  plugins: [],
} satisfies Config;
