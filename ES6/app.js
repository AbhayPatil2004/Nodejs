import  num , {a } from './math.js'

console.log(num , a)

console.log( import.meta)
console.log( import.meta.url)
 
const { filename , dirname } = import.meta

console.log( filename)
console.log( dirname)

import.meta.a = 'Abhay'
const name = import.meta.a 
console.log(name)

console.log( process.cwd())