class RecipeService {
    constructor() {
        this.baseUrl = "https://www.themealdb.com/api/json/v1/1";
    }

    async getRecipeByName(name) {
        if (!name) return null;
        const response = await fetch(`${this.baseUrl}/search.php?s=${encodeURIComponent(name)}`);
        const data = await response.json();
        return data.meals || [];
    }

    async filterRecipesByCategory({ category, ingredient, area }) {
        const promises = [];

        // Adiciona à lista de buscas APENAS os campos que foram preenchidos
        if (category) {
            promises.push(
                fetch(`${this.baseUrl}/filter.php?c=${encodeURIComponent(category)}`)
                    .then(res => res.json())
                    .then(data => data.meals || [])
            );
        }

        if (ingredient) {
            promises.push(
                fetch(`${this.baseUrl}/filter.php?i=${encodeURIComponent(ingredient)}`)
                    .then(res => res.json())
                    .then(data => data.meals || [])
            );
        }

        if (area) {
            promises.push(
                fetch(`${this.baseUrl}/filter.php?a=${encodeURIComponent(area)}`)
                    .then(res => res.json())
                    .then(data => data.meals || [])
            );
        }

        // Se nenhum filtro foi informado pelo usuário
        if (promises.length === 0) return null;

        // Executa todas as requisições ativas ao mesmo tempo
        const results = await Promise.all(promises);

        // Se qualquer um dos filtros retornou vazio, a combinação de filtros não tem resultados
        if (results.some(list => list.length === 0)) {
            return [];
        }

        // Faz o cruzamento (intersecção) das listas retornadas
        let intersection = results[0];
        for (let i = 1; i < results.length; i++) {
            const currentIds = new Set(results[i].map(meal => meal.idMeal));
            intersection = intersection.filter(meal => currentIds.has(meal.idMeal));
        }

        return intersection;
    }
}

module.exports = RecipeService;