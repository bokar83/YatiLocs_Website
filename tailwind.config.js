module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Space Grotesk"', 'sans-serif']
      },
      colors: {
        backgroundDark: '#1B1B1B',
        backgroundLight: '#F1E9DB',
        ctaGold: '#E9C46A',
        ctaTeal: '#2A9D8F',
        charcoal: '#333'
      }
    }
  },
  plugins: []
};
