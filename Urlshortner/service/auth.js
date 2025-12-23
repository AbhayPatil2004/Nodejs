const sessionIdToUserMAp = new Map()

function setUser( id , user ){
    sessionIdToUserMAp.set( id , user )
}

function getUser( id ){
    return sessionIdToUserMAp.get(id)
}

module.exports = {
 setUser ,
 getUser
} 