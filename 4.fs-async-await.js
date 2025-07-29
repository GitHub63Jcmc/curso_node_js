// -----------------------------------------  ESTO NO FUNCIONA ------------------------------------------

const fs = require('node:fs/promises') // ESTO NO FUNCIONA

console.log('Leyendo el primer archivo...') // ESTO NO FUNCIONA
const firtsText = await fs.readFile('./archivo.txt', 'utf-8') // ESTO NO FUNCIONA
console.log('primer texto: ', firtsText); // ESTO NO FUNCIONA

console.log('Hacer cosas mientras lee el archivo...') // ESTO NO FUNCIONA

console.log('Leyendo el segundo archivo...') // ESTO NO FUNCIONA
const secondText = await fs.readFile('./archivo2.txt', 'utf-8') // ESTO NO FUNCIONA
console.log('Segundo texto: ', secondText); // ESTO NO FUNCIONA

// -----------------------------------------  ESTO NO FUNCIONA ------------------------------------------
