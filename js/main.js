import { loadHeaderFooter } from "./utils.mjs";
// import { fetchRecipeDetails, renderRecipeDetails } from '../js/recipeDetails.mjs';


loadHeaderFooter();

document.querySelector('#search-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#search-input').value;
    console.log(name);
    location.href = `/recipe-list/search-list.html?name=${name}`;
})
const recipeId = '53050'; 
const containerElement = document.getElementById('recipe-details-container');

document.querySelector('#newsletterBtn').addEventListener('click', (e)=>{
  e.preventDefault();
  location.assign('./registration/index.html');
})

// Fetch recipe details
// fetchRecipeDetails(recipeId)
//   .then((recipeData) => {
//     // Render recipe details in the container
//     renderRecipeDetails(recipeData, containerElement);
//   })
//   .catch((error) => {
//     console.error('Error fetching or rendering recipe details:', error);
//   });
