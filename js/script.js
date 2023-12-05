document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');

    searchForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = document.getElementById('search-input').value;
        const recipes = await fetchRecipes(query);
        displayRecipes(recipes);
    });
});

async function fetchRecipes(query) {
    // Replace with actual API endpoint and include API key if necessary
    const response = await fetch(`https://api.example.com/recipes/search?query=${query}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
}

function displayRecipes(recipes) {
    const recipesContainer = document.querySelector('.featured-recipes .recipe-grid');
    recipesContainer.innerHTML = ''; // Clear existing recipes

    // Create and append elements for each recipe
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe';

        const recipeImage = document.createElement('img');
        recipeImage.src = recipe.imageUrl;
        recipeImage.alt = recipe.title;

        const recipeTitle = document.createElement('h3');
        recipeTitle.textContent = recipe.title;

        recipeElement.append(recipeImage, recipeTitle);
        recipesContainer.appendChild(recipeElement);
    });
}
