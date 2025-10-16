/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",               // همه فایل‌های html توی ریشه
    "./src/**/*.{js,jsx,ts,tsx}" // تمام فایل‌های JS/React/Vue در پوشه src
  ],
  theme: {
    extend: {},
  },
  plugins:[],
}

