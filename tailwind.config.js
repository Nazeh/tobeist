module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#fafafa',
          200: '#e5e5e5',
          300: '#cccccc',
          400: '#a5a5a5',
          500: '#7f7f7f',
          600: '#595959',
          700: '#404040',
          800: '#262626',
          900: '#0d0d0d',
        },
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        default: 'var(--color-bg-default)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        default: 'var(--color-text-default)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
        secondary: 'var(--color-border-secondary)',
        default: 'var(--color-border-default)',
      },
    },
  },
  variants: {},
  plugins: [],
};
