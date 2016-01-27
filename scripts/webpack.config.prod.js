const webpack = require('webpack')
const config = require('./webpack.config.base')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin('style.[contenthash].css')

config.devtool = 'source-map'
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    },
    comments: false
  }),
  extractCSS
)
config.module.loaders.push(
  {
    test: /\.css$/,
    loader: extractCSS.extract([
      'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss'
    ])
  }
)

module.exports = config
