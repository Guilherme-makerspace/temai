const RecipeService = require("../../services/RecipeService");
const recipeService = new RecipeService();

class RecipeController {
    async searchRecipeByName(req, res) {
        const recipeName = req.query.name;
        const recipes = recipeName ? await recipeService.getRecipeByName(recipeName) : null;
        res.render("Recipe/View", { recipes });
    }

    async filterRecipesByCategory(req, res) {
        const category = req.query.category;
        const recipes = category ? await recipeService.filterRecipesByCategory(category) : null;
        res.render("Recipe/Filter", { recipes });
    }

    recipeView(req, res) {
        res.render("Recipe/View", { recipes: null });
    }

    filterView(req, res) {
        res.render("Recipe/Filter", { recipes: null });
    }
}

module.exports = new RecipeController;