const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  console.log('Listening on port', port, '...lets keep it that way')
})
