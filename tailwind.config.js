module.exports = {
  plugins: [
    require('@tailwindcss/ui'),
  ],
  theme: {
    fontFamily: {
      body: ['Open Sans', 'sans-serif'],
      mono: ['Consolas', 'Menlo', 'monospace']
    },
    extend: {
      screens: {
        'print': {'raw': 'print'},
      }
    }
  }
}
