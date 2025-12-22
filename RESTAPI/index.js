const express = require('express')
const users = require('./data.json')
const fs = require('fs')
const app = express()

app.use( express.urlencoded({extended:false}))
// fetch all users

app.use((req,res,next) => {
    console.log("Hello from Middleware")
    // return res.json({msg:"Hellooo"})
    next()
})

app.get('/api/users' , ( req , res ) => {
    return res.json(user)
})

app.get('/users' , ( req , res ) => {
    const html = `
    <u>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
    </u>
    `
    res.send(html)
})


app.post('/api/users' , ( req , res ) => {

    const body = req.body()



    users.push( { ...body , id : 1001 })
    
    fs.writeFile( './data.json' , JSON.stringify( users) , ( err , data ) => {})

    return res.json({ status : "pending"})
})

// get user by id
app.get("/user/:id" , ( req , res ) => {
    const id = Number(req.params.id )
    const user = users.find( (user) => user.id === id )


    res.json(user)
})

app.listen( 3000 , () => {
    console.log("Server started at port 3000")
})