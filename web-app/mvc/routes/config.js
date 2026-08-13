const { Router } = require("express")
const UserController = require("../controllers/UserController")
const RecipeController = require("../controllers/RecipeController")

const router = Router()

//Rotas de usuário

router.get("/", (req, res) => UserController.index(req, res))
router.get("/user/signup", (req, res) => UserController.userSignUpView(req, res))
router.post("/user/signup", (req, res) => UserController.userPostAsync(req, res))
router.put("/user/edit", (req, res) => UserController.userPutAsync(req, res))
router.get("/user/edit/:id", (req, res) => UserController.userEditView(req, res))
router.delete("/user/delete/:id", (req, res) => UserController.userDeleteAsync(req, res))

//Rotas de receita

router.get("/recipe/search", (req, res) => RecipeController.searchRecipeByName(req, res))
router.get("/recipe/filter", (req, res) => RecipeController.filterRecipesByCategory(req, res))

module.exports = router