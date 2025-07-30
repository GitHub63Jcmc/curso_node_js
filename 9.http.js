const http = require('node:http')
const { findAvailablePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('<h1 style="color: red">Hola mundo</h1>')
})

findAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
  })
})
