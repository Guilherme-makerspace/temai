const { Router } = require("express")
const UserController = require("../controllers/UserController")

const router = Router()

router.get("/", (req, res) => UserController.index(req, res))

module.exports = router