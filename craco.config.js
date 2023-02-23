module.exports = {
  plugins: [
    {
      plugin: require('craco-less'),
      options: {
        noIeCompat: true,
      },
    },
  ],
  eslint: {
    enable: false,
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
};
