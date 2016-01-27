const server = require('webpack-hot-server')
const config = require('./webpack.config.dev')

const port = process.env.PORT || 7888

server({
  config,
  port,
  customIndex: true
}).then(() => {
  console.log(`running at http://localhost:${port}, building...`)
})
