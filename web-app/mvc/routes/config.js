const { Router } = require("express")
const UserController = require("../controllers/UserController")

const router = Router()

router.get("/", (req, res) => UserController.index(req, res))
router.get("/user/signup", (req, res) => UserController.userSignUpView(req, res))
router.post("/user/signup", (req, res) => UserController.userPostAsync(req, res))
router.put("/user/edit", (req, res) => UserController.userPutAsync(req, res))
router.get("/user/edit/:id", (req, res) => UserController.userEditView(req, res))
router.delete("/user/delete/:id", (req, res) => UserController.userDeleteAsync(req, res))

module.exports = router