import { readFile } from 'node:fs/promises'

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([firtsText, secondText]) => {
    console.log('primer texto: ', firtsText)
    console.log('Segundo texto: ', secondText)
})



