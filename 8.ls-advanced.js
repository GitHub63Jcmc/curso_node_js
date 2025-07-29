const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.' // vamos a sacar de la segunda posición

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder) // leer directorio
  } catch {
    console.error(pc.red(`❌ No se pudo leer el directorio: ${folder}`))
    process.exit(1) // salir del proceso con error
  }

  const filesPromises = files.map(async file => {
    const filePath = path.join(folder, file) // Recuperar información de cada uno de los ficheros
    let stats
    try {
      stats = await fs.stat(filePath) // status - nos da información del fichero
    } catch {
      console.error(pc.red(`❌ No se pudo leer el directorio: ${filePath}`))
      process.exit(1) // salir del proceso con error
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'd' : 'f' // saber si es un directorio
    const fileSize = stats.size.toString() // tamaño del fichero
    const fileModified = stats.mtime.toLocaleString() // archivo  modificado

    return `${pc.bgMagenta(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)} ` // devolver la información del fichero
  })

  const filesInfo = await Promise.all(filesPromises) // esperar a que se resuelvan todas las promesas

  filesInfo.forEach(fileInfo => console.log(fileInfo)) // imprimir la información de cada fichero
}

ls(folder)
