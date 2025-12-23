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

    setUser( sessionId , user )
    res.cookie('uid' , sessionId)
    return res.render("home")

}

module.exports = {
    handelUserSignUP ,
    handelUserLogin
}