// Objecto process. Ej: argumentos de entrada
// console.log(process.argv);

// controlar el proceso y su salida
// process.exit(0); // 0 indica que el proceso terminó correctamente

// podemos controlar eventos del proceso
// process.on('exit', (code) => {
//     // limpiar los recursos
//     console.log(`El proceso ha terminado con el código: ${code}`);
// });

// directorio de trabajo actual
console.log(process.cwd());

// plataforma
console.log(process.env.PEPITO);

// en el terminal escribe "PEPITO=Hola node 7.process.js"