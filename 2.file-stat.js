// File sistem / información del sistema.
const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes de fs



const stats = fs.statSync('./archivo.txt') // sincrono, bloquea el hilo de ejecución
console.log(`Hola Joao ${stats} `) // muestra información del archivo, como tamaño, fecha de creación, etc.
console.log(
    (`Fecha de creación: ${stats.isFile}`), // fecha de creación del archivo
    (`Es un enlace?: ${stats.isSymbolicLink}`), // Si es un enlace
    (`¿Es un directorio?: ${stats.isDirectory()}`), // verifica si es un directorio
    (`Tamaño del archivo: ${stats.size} bytes`),
)
