const express = require("express")
const HewanController = require("../controllers/hewan.controller")
const router = express.Router()

const postChecker = (req, res, next) => {
    const spesies = req.body.spesies.toLowerCase()
    const isSpesies = ["kucing", "anjing", "kelinci"]

    if(isSpesies.includes(spesies)) {
      next()
    } else {
      res.status(400).json({ error: "Spesies not valid" })
    }
}

router.get("/",HewanController.getDataJSON)
router.post("/", postChecker, HewanController.createNewHewan)
router.get("/:id",HewanController.getHewanByID)
router.put("/:id",HewanController.updateDataHewan)
router.delete("/:id",HewanController.deleteDataHewan)


module.exports = router;