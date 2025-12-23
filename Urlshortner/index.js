const express = require("express")
const { connectToMongoDB } = require("./connect")
const app = express()
const PORT = 3000 
const urlRoute = require("./routes/url")
const userRoute = require("./routes/user")
const URL = require("./models/url")
const path = require('path')
const cookies = require("cookieparser")
const { allowLoginUser } = require("./middleware/auth")

app.set('view engine' , "ejs")

app.use(express.json())
app.use(cookies())
app.set('views' , path.resolve('./views'))

app.get("/test" , async ( req , res ) => {
    const allUrl = await URL.find();
    return res.render('home' , { urls: allUrl})
})

connectToMongoDB(process.env.mongo)
.then( () => { console.log("Database Connected")})
.catch( ( err ) => {
    console.log(err)
})

app.use("/url" , allowLoginUser , urlRoute )
app.use( "/user" , userRoute )

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