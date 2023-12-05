// recipeDetail.mjs


// Function to fetch recipe details
export async function fetchRecipeDetails(recipeId) {
    try {
        // Adjusted to fetch from TheMealDB API
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.meals[0]; // Assuming the first meal is the relevant one
    } catch (error) {
        console.error('Fetching recipe details failed:', error);
        throw error;
    }
}

// Function to render recipe details in the UI
export function renderRecipeDetails(recipeData, containerElement) {
    // Adjusting the destructuring to match TheMealDB's data structure
    const { strMeal: title, strInstructions: instructions, strMealThumb: imageUrl, ...ingredientsData } = recipeData;

    // Clear previous content
    containerElement.innerHTML = '';

    // Create and append new elements
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const imageElement = new Image();
    imageElement.src = imageUrl;
    imageElement.alt = `Image of ${title}`;

    // TheMealDB uses dynamic keys for ingredients and measurements
    const ingredientsList = document.createElement('ul');
    for(let i = 1; i <= 20; i++) {
        const ingredient = ingredientsData[`strIngredient${i}`];
        const measure = ingredientsData[`strMeasure${i}`];
        if(ingredient) {
            const item = document.createElement('li');
            item.textContent = `${ingredient} - ${measure}`;
            ingredientsList.appendChild(item);
        }
    }

    const instructionsElement = document.createElement('p');
    instructionsElement.textContent = instructions;

    containerElement.append(titleElement, imageElement, ingredientsList, instructionsElement);
}
