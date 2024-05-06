import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateIn90: {
          'from': { transform: 'rotate(90deg)' },
          'to': { transform: 'rotate(0deg)' }
        },
        slideInWidth: {
          'from': { width: '0px' },
          'to': { width: '100%' }
        },
        slideInHeight: {
          'from': { height: '0px' },
          'to': { height: '100%' }
        },
      },
      animation: {
        'rotate-in-90': 'rotateIn90 0.2s linear',
        'slide-in-width': 'slideInWidth 0.2s linear',
        'slide-in-height': 'slideInHeight 0.2s linear',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};
export default config;
