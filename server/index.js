const http = require('http')
const fs = require('fs')
const url = require('url')

const server = http.createServer( ( req , res ) => {

    // fs.appendFile("./log.txt" , `${Date.now() , req.url}`)
    // console.log(req)
    // console.log( req.headers)

    const myUrl = url.parse( req.url , true )

    console.log(myUrl)
    res.end("Hello from server")
})

server.listen( 3000 , () => {
    console.log("Server Listening ")
})