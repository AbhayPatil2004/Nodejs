const mongoose = require('mongoose')

async function connectToMongoDB(url){
    return mongoose.mongo.connect(url)
}

module.exports = {
    connectToMongoDB
}