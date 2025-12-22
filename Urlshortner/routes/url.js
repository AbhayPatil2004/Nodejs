const express = require('express')
const router = express.router()
const { handelGenrateNewShortUrl } = require("../controller/url")

router.post("/" , handelGenrateNewShortUrl)