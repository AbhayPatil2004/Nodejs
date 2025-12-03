const express = require('express')
const users = require('./data.json')
const app = express()


// fetch all users
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