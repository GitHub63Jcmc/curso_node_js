const fs = require('node:fs') 
const { promisify } = require('node:util')

// console.log('Leyendo el primer archivo 1...')

// const text = fs.readFileSync('./archivo.txt', 'utf-8') // sincrono, bloquea el hilo de ejecución
// console.log(`Hola: ${text}`) // muestra el contenido del archivo

// console.log('Hacer cosas mientras lee el archivo...')

// console.log('Leyendo el segundo archivo 2...')

// const secondText = fs.readFileSync('./archivo2.txt', 'utf-8') 
// console.log(`Hola: ${secondText}`) // muestra el contenido del segundo archivo

// Asi ejucutará de forma sincrona, (siguencial) bloqueando el 
// hilo de ejecución hasta que se complete la lectura de ambos archivos.


// ----------------------------------------------------------------------------------

// console.log('Leyendo el primer archivo...')

// fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
//     console.log('primer texto: ', text); // muestra el contenido del archivo
// })

// console.log('Hacer cosas mientras lee el archivo...')

// console.log('Leyendo el segundo archivo...')

// fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
//     console.log('Segundo texto: ', text) 
// })

// ----------------------------------------------------------------------------------


console.log('Leyendo el primer archivo...')

fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('primer texto: ', text); // muestra el contenido del archivo
})

console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')

fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto: ', text) 
})


