class RecipeService
{
    constructor(){
        this.baseUrl = "https://www.themealdb.com/api/json/v1/1"
    }

    async getRecipeByName(name)
    {
        const response = await fetch(`${this.baseUrl}/search.php?s=${name}`)
        const data = await response.json()
        return data.meals
    }

    async filterRecipesByCategory(category)
    {
        const response = await fetch(`${this.baseUrl}/filter.php?c=${category}`)
        const data = await response.json()
        return data.meals
    }
}

module.exports = RecipeService