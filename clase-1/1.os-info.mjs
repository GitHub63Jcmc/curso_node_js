// import os from 'node:os'
import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo:')
console.log('----------------------------------------')

console.log('Nombre del sistema operativo:', platform())
console.log('Versión del sistema operativo:', release())
console.log('Arquitectura del sistema:', arch())
console.log('CPUs:', cpus()) // Vamos a poder escalar procesos en Node.js
console.log('Memoria libre:', freemem() / 1024 / 1024, 'MB')
console.log('Memoria total del sistema:', totalmem() / 1024 / 1024, 'MB')
console.log('uptime del sistema:', uptime() / 60 / 60, 'segundos')
