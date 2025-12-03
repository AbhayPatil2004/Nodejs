const express = require('express')

const app = express()

app.get("/" , ( req , res ) => {
    return res.send("Hello from Express")
})
app.get("/about" , ( req , res ) => {
    console.log( req.query )
    console.log(req)
    return res.send("Hello from Express about")
})

app.listen( 3000 , () => {
    console.log("Server is Listening")
})