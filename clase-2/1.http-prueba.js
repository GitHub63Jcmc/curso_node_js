const http = require('node:http') // protocolo http
const fs = require('node:fs')
const path = require('node:path')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  // Servir imagen estática
  if (req.url.startsWith('/img/')) {
    const imagePath = path.join(__dirname, req.url)
    const stream = fs.createReadStream(imagePath)

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')

    stream.pipe(res)
    stream.on('error', () => {
      res.statusCode = 404
      res.end('Imagen no encontrada')
    })
    return
  }

  // Servir contenido HTML
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.statusCode = 200
    res.end(`
      <div style="text-align: center; margin-top: 50px;">
        <ul style="list-style-type: none; padding: 0;">
          <li><a href="/">Inicio</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <h1>Bienvenido a mi página de inicio</h1>
      </div>
    `)
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end(`
      <div style="text-align: center; margin-top: 50px;">
        <ul style="list-style-type: none; padding: 0;">
          <li><a href="/">Inicio</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <h1>Bienvenido a mi página de Contacto</h1>
      </div>
    `)
  } else if (req.url === '/blog') {
    res.statusCode = 200
    res.end(`
      <div style="text-align: center; margin-top: 50px;">
        <ul style="list-style-type: none; padding: 0;">
          <li><a href="/">Inicio</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
        <h4>Bienvenido a mi Blog</h4>
        <p>Este es un espacio para compartir mis pensamientos y experiencias.</p>
        <img src="/img/1.http.jpg" alt="Imagen del blog" width="300" />
      </div>
    `)
  } else {
    res.statusCode = 404
    res.end('<h1>404 - Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Servidor escuchando en http://localhost:${desiredPort}`)
})
