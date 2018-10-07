const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    hot: true,
  },
});
