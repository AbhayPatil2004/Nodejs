const express = require("express")

const router = express.router()
const { handelUserSignUP} = require("../controller/user")

router.post('/', handelUserSignUP)
module.exports = {
    router
}