const { nanoid } = require('nanoid')
const URL = require("../models/url")

async function handelGenrateNewShortUrl( req , res ) {

    const body = req.body
    if( !body.url ) return res.status(400).json(
        {
            error : "Url is required"
        }
    )

    const shortId = nanoid(8)
    await URL.create(
        {
            shortId : shortId,
            redirectURL : body.url ,
            visitHistory : []

        }
    )

    return res.status(200).json( { id : shortId})
}

module.exports = { handelGenrateNewShortUrl }