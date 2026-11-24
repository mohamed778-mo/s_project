/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        kmt: {
          blue: '#1070B1',        // RGB(16, 112, 177)
          blueHover: '#0D5B91',
          blueDark: '#0B4F7E',
          blueLight: '#E8F3FA',
          slate: '#0F172A',
        }
      },
      fontFamily: {
        sans: [
          '"Space Grotesk"',
          '"Space Grotesk Fallback"',
          'Inter',
          '"Inter Fallback"',
          'system-ui',
          '-apple-system',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
        display: [
          '"Space Grotesk"',
          '"Space Grotesk Fallback"',
          'Inter',
          'sans-serif'
        ],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
