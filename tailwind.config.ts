import type { Config } from 'drizzle-kit';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '3xl': '1728px',
        '4xl': '4000px', // If you need 4000px as the upper limit
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        Domine: ['Domine', 'sans-serif'],
        Playfire: ['Playfair', 'sans-serif'],
        Lato: ['Lato', 'sans-serif'],

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
        '80p': '70% 80%',
      },
      colors: {
        vineopink: '#F78A79',
        vineogray: '#394A59',
        logingray: '#303E63',
        eyecolor: '#A6A6A6',
        vineoblack: '#18191A',
        qntitle: '#232323',
        blackcolo: '#0F1011',

      },
      backgroundImage: {
        'glass-bottle': 'url(\'/images/glass-bottle.png\')',
        'wines': 'url(\'/images/wines.png\')',
        'bottleglass': 'url(\'/images/bottle&glass.png\')',
        'letter': 'url(\'/images/letter.png\')',
        'beige': 'url(\'/images/background.jpg\')',
        'custom-gradient': 'linear-gradient(to right, #394A59 0%, rgba(33,33,33,0) 70%, #394A59 100%)',
        'card-gradient': 'linear-gradient(174.8deg, rgba(249, 249, 249, 0) -171.86%, rgba(244, 244, 244, 0.1) -30.43%, rgba(255, 255, 255, 0.61) 56.34%, #FFFFFF 119.41%)',

        'sidebar-gradient': 'linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.11) 15%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 100%)',
        'ans-gradient': 'linear-gradient(174.81deg, rgba(249, 246, 239, 0) -171.89%, rgba(247, 138, 121, 0.15) 15.79%, rgba(255, 210, 203, 0.29) 67%, rgba(247, 138, 121, 0.46) 100.7%)',
      },
      backdropBlur: {
        'sidebar-blur': '38px', // Custom blur for the sidebar background
      },
      boxShadow: {
        'login-shadow': '2px 2px 40.3px 0px rgba(56, 56, 56, 0.18)',
        'sidebar-shadow': '0px 0px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for the sidebar
      },

    },
  },
  plugins: [],
} satisfies Config;
