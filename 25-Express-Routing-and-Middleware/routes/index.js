const express = require("express")
const router = express.Router()

const hewanRoutes = require('./hewan')

router.use("/hewan",hewanRoutes)

module.exports = router