module.exports = {
  theme: {
    extend: {
      colors: {
        background: '#161619',
        'logo-green': '#00d32d',
        'logo-darkgreen': '#009b24',
        'card-background': '#222226',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
      },
    },
  },
  content: ['./**/*.{html,js}'],
  plugins: [],
}
