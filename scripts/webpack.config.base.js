const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '../'),
  entry: ['./client/index'],
  output: {
    path: path.join(__dirname, '../static'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      },
      {
        test: /\.jade$/,
        loaders: ['jade']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  postcss: [
    require('rucksack-css')({
      autoprefixer: true
    })
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      },
      '__DEV__': !!process.env.NODE_ENV
    }),
    new HtmlWebpackPlugin({
      title: 'React boilerplate',
      template: './scripts/index.jade',
      inject: false
    })
  ]
}
