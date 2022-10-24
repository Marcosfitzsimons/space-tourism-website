/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': {
          '50': '#fdfdff',
          '100': '#fafbfe',
          '200': '#f3f5fe',
          '300': '#eceffd',
          '400': '#dee2fb',
          '500': '#D0D6F9',
          '600': '#bbc1e0',
          '700': '#9ca1bb',
          '800': '#7d8095',
          '900': '#66697a'
        },
        'dark': {
          '50': '#f3f3f3',
          '100': '#e7e7e8',
          '200': '#c2c3c5',
          '300': '#9d9ea2',
          '400': '#54565d',
          '500': '#0B0D17',
          '600': '#0a0c15',
          '700': '#080a11',
          '800': '#07080e',
          '900': '#05060b'
        },
      },
      fontFamily: {
        'ff-serif': ['"Bellefair"', 'serif'],
        'ff-sans-cond': ['"Barlow Condensed"', 'sans-serif'],
        'ff-sans-normal': ['"Barlow"', 'sans-serif'],
      },
      fontSize: {
        'fs-900': ['9.375rem', {
          lineHeight: '1.1',
        }],
        'fs-800': ['6.25rem', {
          lineHeight: '1.1',
        }],
        'fs-700': ['3.5rem', {
          lineHeight: '1.1',
        }],
        'fs-600': ['2rem', {
          lineHeight: '1.1',
        }],
        'fs-500': ['1.75rem', {
          letterSpacing: '4.7px',
        }],
        'fs-400': '1.125rem',
        'fs-300': ['1rem', {
          letterSpacing: '2.7px',
        }],
        'fs-200': ['0.875rem', {
          letterSpacing: '2.35px',
        }],
      },
    }
  },
  plugins: [],
}
