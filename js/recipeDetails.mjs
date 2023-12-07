// recipeDetail.mjs
import { getParam } from "./utils.mjs";
// recipeDetail.mjs

//const data = await fetchRecipeDetails(recipeID);


// Function to fetch recipe details
export async function fetchRecipeDetails(recipeId) {
    try {
        // Adjusted to fetch from TheMealDB API
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.meals[0]; 
    } catch (error) {
        console.error('Fetching recipe details failed:', error);
        throw error;
    }
}
const recipeID = getParam("recipe");
const container = document.querySelector(".recipe-detail");

fetchRecipeDetails(recipeID)
    .then(recipeData => {
        renderRecipeDetails(recipeData, container);
    })
    .catch(error => {
        console.error('Error fetching and rendering recipe details:', error);
    });

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
    const ingredientsTitle = document.createElement('h3');
    ingredientsTitle.textContent = 'Ingredients:';

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
    const instructionsTitle = document.createElement('h3');
    instructionsTitle.textContent = 'Instructions to Cook:';

    const instructionsElement = document.createElement('p');
    instructionsElement.textContent = instructions;

    containerElement.append(titleElement, imageElement, ingredientsTitle, ingredientsList, instructionsTitle, instructionsElement);
}
