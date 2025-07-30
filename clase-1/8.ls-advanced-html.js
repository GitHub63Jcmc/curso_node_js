const fs = require('node:fs/promises');
const path = require('node:path');
const { exec } = require('node:child_process');

const scriptBaseName = path.basename(__filename, '.js') // "8.ls-advanced-html"
const fileName = `${scriptBaseName}.html`;
const cssFileName = `${scriptBaseName}.css`;

const folder = process.argv[2] ?? '.' // vamos a sacar de la segunda posición

async function ls (folder) {
    let files
    try {
        files = await fs.readdir(folder) // leer directorio
    } catch  {
        console.error(`No se pudo leer el directorio: ${folder}`)
        process.exit(1) // salir del proceso con error
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file) // Recuperar información de cada uno de los ficheros
        let stats
        try {
            stats = await fs.stat(filePath) //status -  nos da información del fichero
        } catch  {
            console.error(`No se pudo leer el directorio: ${filePath}`)
            process.exit(1) // salir del proceso con error
        }

        const isDirectory = stats.isDirectory() 
        const fileType = isDirectory ? 'd' : 'f'  // saber si es un directorio
        const fileSize = stats.size.toString() // tamaño del fichero
        const fileModified = stats.mtime.toLocaleString() // archivo  modificado

         return `<tr><td>${fileType}</td><td>${file}</td><td>${fileSize}</td><td>${fileModified}</td></tr>`;
    })

    const filesInfo = await Promise.all(filesPromises) // esperar a que se resuelvan todas las promesas


     const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Listado de Archivos</title>
            <link rel="stylesheet" href="${cssFileName}">
        </head>
        <body>
            <h1>Contenido de la carpeta "${folder}" <span>^raiz^</span></h1>
            <table>
                <thead>
                  <tr><th>Tipo</th><th>Archivo</th><th>Tamaño</th><th>Modificado</th></tr>
                </thead>
                <tbody>
                  ${filesInfo.join('\n')}
                </tbody>
            </table>
        </body>
        </html>`;

    await fs.writeFile(fileName, htmlContent);
    console.log(`Archivo HTML generado con éxito: ${fileName}`);

    // 🧠 Abrir el archivo en el navegador automáticamente (Windows)
    exec(`start ${fileName}`);
}

ls(folder)

