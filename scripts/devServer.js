const server = require('webpack-hot-server')
const opn = require('opn')
const config = require('./webpack.config.dev')

const port = process.env.PORT || 7888
const noBrowser = process.env.BROWSER

server({
  config,
  port,
  customIndex: true
}).then(() => {
  console.log(`running at http://localhost:${port}, building...`)
  if (!noBrowser) {
    opn(`http://localhost:${port}`)
  }
})
