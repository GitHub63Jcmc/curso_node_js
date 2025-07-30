// const fs = require('node:fs');
const fs = require('node:fs/promises');


//leer directorio
fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })    
    })
    .catch(err => {
        if(err) {
            console.error('Error al leer el directorio:', err);
            return;
        }
})

