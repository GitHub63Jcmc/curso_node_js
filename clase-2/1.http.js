const http = require('node:http') // protocolo http

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; Charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404 = Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server is listening on port http://localhost:${desiredPort}`)
})

// node --watch ./clase-2/1.http.js
