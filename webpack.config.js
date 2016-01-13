var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src/index.js'),
    vendor: [ 'react', 'react-dom' ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
      { test: /\.png$/, loader: 'url-loader?limit=10000' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('styles.css')
  ]
};