const http = require('node:http') // protocolo http

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; Charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.end(
      '<div style="text-align: center; margin-top: 50px;">' +
        '<ul style="list-style-type: none; padding: 0;">' +
          '<li><a href="/">Inicio</a></li>' +
          '<li><a href="/contacto">Contacto</a></li>' +
          '<li><a href="/blog">Blog</a></li>' +
        '</ul>' +
      '</div>' +
      '<h1 style="text-align: center;">Bienvenido a mi página de inicio</h1>')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.end(
      '<div style="text-align: center; margin-top: 50px;">' +
        '<ul style="list-style-type: none; padding: 0;">' +
          '<li><a href="/">Inicio</a></li>' +
          '<li><a href="/contacto">Contacto</a></li>' +
          '<li><a href="/blog">Blog</a></li>' +
        '</ul>' +
      '</div>' +
      '<h1 style="text-align: center;">Bienvenido a mi página de Contacto</h1>')
  } else if (req.url === '/blog') {
    res.statusCode = 200 // OK
    res.end(
      '<div style="text-align: center; margin-top: 50px;">' +
        '<ul style="list-style-type: none; padding: 0;">' +
          '<li><a href="/">Inicio</a></li>' +
          '<li><a href="/contacto">Contacto</a></li>' +
          '<li><a href="/blog">Blog</a></li>' +
        '</ul>' +
      '</div>' +
      '<h1 style="text-align: center;">Bienvenido a mi Blog</h1>')
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
