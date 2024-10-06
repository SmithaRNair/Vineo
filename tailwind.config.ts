import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans : ['Inter', 'sans-serif'],
      },
      fontSize: {
        '20px': '20px',
        '32px': '32px',
        '40px': '40px',
        '48px': '48px',
      },
    },
  },
  plugins: [],
} satisfies Config;
