// statefull
// const sessionIdToUserMAp = new Map()

// function setUser( id , user ){
//     sessionIdToUserMAp.set( id , user )
// }

// function getUser( id ){
//     return sessionIdToUserMAp.get(id)
// }

// module.exports = {
//  setUser ,
//  getUser
// } 

// stateless
const jwt = require("jsonwebtoken")
const secret = "fbvjsjfdgbjfvflvbkjfdv"

function setUser( user ){

    return jwt.sign(user,secret)
}

function getUser( token ){
    if( !token ) return null ;
    return jwt.verify( token , secret )
}
module.exports = {
 setUser ,
 getUser
} 