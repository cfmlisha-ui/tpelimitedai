/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary red, sourced from logo + letterhead (#EB0202 family)
          red: {
            50: '#FEECEC',
            100: '#FCD2D2',
            200: '#F8A5A5',
            300: '#F27878',
            400: '#EF4444',
            500: '#EB0202',
            600: '#C40202',
            700: '#9C0202',
            800: '#750101',
            900: '#4D0101',
          },
          // Warm mocha accent, sourced from maintenance page
          mocha: {
            50: '#F7EFEC',
            100: '#EFD9D1',
            200: '#DCB3A4',
            300: '#CB9786',
            400: '#BA8475',
            500: '#A06C5E',
            600: '#7E5448',
            700: '#5C3D33',
            800: '#3F2A23',
            900: '#281713',
          },
          // Near-black for dark sections / nav
          ink: {
            50: '#F2F2F2',
            100: '#D9D9D9',
            200: '#B3B3B3',
            300: '#808080',
            400: '#4D4D4D',
            500: '#262626',
            600: '#1A1A1A',
            700: '#121212',
            800: '#0A0A0A',
            900: '#000000',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Segoe UI', 'Arial', 'sans-serif'],
        display: ['var(--font-poppins)', 'Trebuchet MS', 'Segoe UI', 'sans-serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      maxWidth: {
        '7xl': '80rem',
      },
    },
  },
  plugins: [],
}
