const webpack = require('webpack')
const config = require('./webpack.config.prod')
const ProgressPlugin = require('webpack/lib/ProgressPlugin')
const ProgressBar = require('progress')

const bar = new ProgressBar('[:bar] :message', {
  complete: '=',
  incomplete: ' ',
  width: 20,
  total: 100,
  clear: true
})
const compiler = webpack(config)
compiler.apply(new ProgressPlugin(function(percentage, msg) {
  bar.update(percentage, {
    message: msg
  })
}))

compiler.run((err, stats) => {
  console.log(stats.toString({
    colors: true,
    children: false,
    chunks: false
  }))
})
