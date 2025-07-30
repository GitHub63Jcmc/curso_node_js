// .js -> por defecto utiliza CommonJS
// .mjs -> por utiliza ES Modules
// .cjs -> para utilizar CommonJS

import { sum, sub, mult } from './sum.mjs'; // Importar la función suma desde sum.js

console.log(sum(1, 2));
console.log(sub(1, 2));
console.log(mult(1, 2));

