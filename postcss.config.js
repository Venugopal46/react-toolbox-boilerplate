const reactToolboxVariables = require('./theme/variables');

module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
      features: {
        customProperties: {
          variables: reactToolboxVariables.default
        }
      }
    },
  },
};
