import formsPlugin from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // Enable dark mode with class strategy
  plugins: [formsPlugin],
};
