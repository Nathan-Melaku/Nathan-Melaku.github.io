/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        white: {
          100: '#545c7e',
          200: '#565f89',
          300: '#737aa2',
          400: '#a9b1d6',
          500: '#c0caf5',
        },
        black: {
          100: '#414868',
          200: '#3b4261',
          300: '#292e42',
          400: '#24283b',
          500: '#1f2335'
        },
      },
    }
  },
  plugins: [],
}
