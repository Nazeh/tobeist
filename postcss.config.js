const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    isProd &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./src/**/*.svelte', './public/index.html'],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      }),
    isProd && require('autoprefixer'),
    isProd && require('cssnano'),
  ],
};
