const express = require("express")
const { connectToMongoDB } = require("./connect")
const app = express()
const PORT = 3000 
const urlRoute = require("./routes/url")
const URL = require("./models/url")

app.use(express.json())

connectToMongoDB(process.env.mongo)
.then( () => { console.log("Database Connected")})
.catch( ( err ) => {
    console.log(err)
})

app.use("/url" , urlRoute )

app.get('/:shortId' , async ( req , res ) => {

    const shortId = req.params.shortId 
    const entry = await URL.findOneAndUpdate(
        {
        shortId ,
    },
    {
        $push:{
            visitedHistory : Date.now()
        }
    }

    )

    res.redirect(entry.redirect)
})

app.listen( PORT , () => {
    console.log("Server Started")
})