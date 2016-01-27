const webpack = require('webpack')
const config = require('./webpack.config.base')

config.devtool = 'cheap-module-eval-source-map'
config.entry.push('webpack-hot-middleware/client')
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)
config.module.loaders.push(
  {
    test: /\.css$/,
    loaders: [
      'style',
      'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      'postcss'
    ]
  }
)

module.exports = config
