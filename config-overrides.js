const webpack = require('webpack');

module.exports = function override(config) {
  // Disable CSS minification to bypass the error
  config.optimization.minimizer = config.optimization.minimizer.filter(
    minimizer => minimizer.constructor.name !== 'CssMinimizerPlugin'
  );
  
  return config;
};
