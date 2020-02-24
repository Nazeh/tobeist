module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fafafa',
          200: '#f5f5f5',
          300: '#ebebeb',
          400: '#e4e4e4',
          500: '#dddddd',
          600: '#c7c7c7',
          700: '#6f6f6f',
          800: '#424242',
          900: '#161616',
        },
        red: {
          400: '#df5349',
          500: '#db4035',
          600: '#c53a30',
        },
      },
      backgroundColor: {
        primary: {
          400: 'var(--bg-primary-400)',
          500: 'var(--bg-primary-500)',
          600: 'var(--bg-primary-600)',
        },
        secondary: 'var(--bg-secondary)',
        default: 'var(--bg-default)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        default: 'var(--text-default)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
        default: 'var(--border-default)',
      },
    },
  },
  variants: {},
  plugins: [],
};
