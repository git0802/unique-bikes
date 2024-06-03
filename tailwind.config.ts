import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      smm:"425px",
      sm: '640px',
      md: '768px',
      'mid': "991px",
      lg: '1024px',
      xl: '1250px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'black': '#000000',
        'red': '#DD1212',
        'white-80': 'rgba(255,255,255,0.8)',
        'white-25': 'rgba(255,255,255,0.25)',
        'black-30': 'rgba(0,0,0,0.3)',
        'black-70': 'rgba(0,0,0,0.7)',
      },
      fontSize: {
        '14px': '14px',
        '16px': '16px',
        '18px': '18px',
        '20px': '20px',
        '24px': '24px',
        '28px': '28px',
        '34px': '34px',
        '40px': '40px',
        '50px': '50px'
      },
      fontWeight: {
        300: '300',
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      borderColor: {
        'light-border': '#fffdfd'
      },
    },
  },
  plugins: [],
};
export default config;
