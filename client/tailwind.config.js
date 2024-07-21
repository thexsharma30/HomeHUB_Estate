/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // Remove the line-clamp plugin
    // require('@tailwindcss/line-clamp'),
  ],
};
