const USer = require("../models/user")
const { v4 : uuid} = require('uuid')
const { setUser , getUser } = require("../service/auth")
 
async function handelUserSignUP( req , res ) => {

    const { name , email , password } = req.body

    await User.create({
        name ,
        email , 
        password 
    })

    return res.render("home")
}
async function handelUserLogin( req , res ) => {

    const { email , password } = req.body ;

    const user = await User.findOne({email})

    if( !user || user.password != password ){
        return res.render("home")
    }
    const sessionId = uuid()

    const token = setUser( user )
    res.cookie('uid' , token)
    return res.render("home")

}

module.exports = {
    handelUserSignUP ,
    handelUserLogin
}