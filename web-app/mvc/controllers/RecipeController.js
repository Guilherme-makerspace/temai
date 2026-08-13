const RecipeService = require("../../services/RecipeService");
const recipeService = new RecipeService();

class RecipeController {
    async searchRecipeByName(req, res) {
        const recipeName = req.query.name;
        const recipes = recipeName ? await recipeService.getRecipeByName(recipeName) : null;
        
        res.render("Recipe/View", { 
            recipes, 
            name: recipeName || '' 
        });
    }

    async filterRecipesByCategory(req, res) {
        const { category, ingredient, area } = req.query;

        // Executa o filtro no Service
        const recipes = await recipeService.filterRecipesByCategory({ category, ingredient, area });

        // Envia as receitas E os parâmetros digitados para manter o formulário preenchido na View
        res.render("Recipe/Filter", { 
            recipes, 
            category: category || '', 
            ingredient: ingredient || '', 
            area: area || '' 
        });
    }

    recipeView(req, res) {
        res.render("Recipe/View", { recipes: null, name: '' });
    }

    filterView(req, res) {
        res.render("Recipe/Filter", { 
            recipes: null, 
            category: '', 
            ingredient: '', 
            area: '' 
        });
    }
}

module.exports = new RecipeController();