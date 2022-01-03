const express = require("express")
const router = express.Router()
const HewanController = require("../controllers/hewan.controller")

router.get("/hewan", HewanController.findAllHewan)
router.get("/hewan/:id", HewanController.getHewanByID)
router.post("/hewan", HewanController.createHewan)
router.put("/hewan/:id", HewanController.updateHewan)
router.delete("/hewan/:id", HewanController.deleteHewan)

module.exports = router