const fs = require('fs')
const os = require('os')
// fs.writeFileSync('./text.txt' , "Hello World")
fs.writeFile('./text.txt' , "lkdskldf" , ( err ) => {})

// console.log( fs.readFileSync('./text.txt' , "utf-8"))
console.log( fs.readFile('./text.txt' , "utf-8" , ( err , result ) => {
    if( err ){
        console.log("Error" , err)
    }
    else{
        console.log( result)
    }
}))


fs.appendFile( './text.txt' , "sjdklfjklsdfj" , ( err ) => {})

console.log( fs.readFile('./text.txt' , "utf-8" , ( err , result ) => {
    if( err ){
        console.log("Error" , err)
    }
    else{
        console.log( result)
    }
}))

console.log( fs.statSync('./text.txt'))
fs.unlinkSync( './text.txt')

fs.mkdir("my-fol" , ( err ) => {})

console.log(os.cpus().length)