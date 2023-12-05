import { loadHeaderFooter } from "./utils.mjs";
import { fetchRecipeDetails, renderRecipeDetails } from '../js/recipeDetails.mjs';


loadHeaderFooter();

document.querySelector('#search-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#search-input').value;
    console.log(name);
    location.href = `/recipe-list/search-list.html?name=${name}`;
})
const recipeId = 'YOUR_RECIPE_ID_HERE'; // Replace with the actual recipe ID you want to fetch
const containerElement = document.getElementById('recipe-details-container');

// Fetch recipe details
fetchRecipeDetails(recipeId)
  .then((recipeData) => {
    // Render recipe details in the container
    renderRecipeDetails(recipeData, containerElement);
  })
  .catch((error) => {
    console.error('Error fetching or rendering recipe details:', error);
  });
