const reactToolboxVariables = require('./theme/variables');

module.exports = {
  ident: 'postcss', // some unique name
  plugins: {
    'postcss-import': {}, // to resolve @import
    'postcss-custom-properties': {
      preserve: false, // remove var() in ouput
      variables: reactToolboxVariables.default
    },
    'postcss-preset-env': {
      stage: 3,
      browsers: ['last 2 versions', '> 5%'],
      features: {
        'nesting-rules': true // for nester rules to work
      }
    },
    'postcss-calc': {}, // for cal() function
    'postcss-color-function': {} // for color() function
  }
};
