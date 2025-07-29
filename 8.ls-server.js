const http = require('http')
const fs = require('node:fs/promises')
const path = require('node:path')

const scriptBaseName = path.basename(__filename, '.js') // ejemplo: "8.ls-server"
const cssFileName = `${scriptBaseName}.css`             // ejemplo: "8.ls-server.css"

const folder = process.argv[2] ?? '.'

const server = http.createServer(async (req, res) => {
    // Si piden el archivo CSS
    if (req.url === `/${cssFileName}`) {
        try {
            const cssPath = path.join(__dirname, cssFileName)
            const cssContent = await fs.readFile(cssPath)
            res.setHeader('Content-Type', 'text/css')
            res.end(cssContent)
        } catch {
            res.statusCode = 500
            res.end('Error al cargar styles_a.css')
        }
        return
    }

    // Página principal
    if (req.url !== '/') {
        res.statusCode = 404
        res.end('Not Found')
        return
    }

    let files
    try {
        files = await fs.readdir(folder)
    } catch {
        res.statusCode = 500
        res.end(`No se pudo leer el directorio: ${folder}`)
        return
    }

    const filesInfo = await Promise.all(files.map(async file => {
        const filePath = path.join(folder, file)
        try {
            const stats = await fs.stat(filePath)
            const fileType = stats.isDirectory() ? 'd' : 'f'
            return `<tr><td>${fileType}</td><td>${file}</td><td>${stats.size}</td><td>${stats.mtime.toLocaleString()}</td></tr>`
        } catch {
            return `<tr><td colspan="4" style="color:red">No se pudo leer: ${file}</td></tr>`
        }
    }))

    const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Explorador de archivos</title>
        <link rel="stylesheet" href="/${cssFileName}">
    </head>
    <body>
        <h1>Contenido de la carpeta "${folder}" <span> ^raiz^ </span></h1>
        <table>
            <thead>
                <tr><th>Tipo</th><th>Archivo</th><th>Tamaño (bytes)</th><th>Modificado</th></tr>
            </thead>
            <tbody>
                ${filesInfo.join('\n')}
            </tbody>
        </table>
    </body>
    </html>`

    const scriptBaseName = path.basename(__filename, '.js');
    const fileName = `${scriptBaseName}.html`;
    await fs.writeFile(fileName, html); // guarda HTML

    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(html)
})

    const PORT = 3000
    server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
// Puedes abrir el navegador y visitar http://localhost:3000 para ver el listado de archivos