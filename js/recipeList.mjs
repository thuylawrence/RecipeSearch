// import { getRecipesByCategory } from "./ExternalServices.js";
import ExternalServices from "./ExternalServices.js";
import { renderListWithTemplate, sortRecipes, searchRecipes } from "./utils.mjs";

function recipeCardTemplate(recipe) {
    return `<li class="recipe-card">
    <a href="../recipe_pages/index.html?recipe=${recipe.idMeal}">
      <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
      <h3 class="card__name">${recipe.strMeal}</h3
    >
  </li>`;
}

{/* <p class="recipe-card__description">${recipe.ShortDescription}</p>
<p class="recipe-card__difficulty">Difficulty: ${recipe.Difficulty}</p></a */}

export default async function recipeList(selector, category, lists) { 
    const element = document.querySelector(selector);
    const newTitle = document.getElementById("recipes");
    console.log(newTitle);
    if (sessionStorage.getItem('userSearch') === 'true') {
      newTitle.innerText = "Search Recipe: " + category.charAt(0).toUpperCase() + category.slice(1);
    } else {
      newTitle.innerText = "Top Recipes: " + category.charAt(0).toUpperCase() + category.slice(1);
    }
    // const AllRecipes = await ExternalServices.getRecipesByCategory(category);
    renderListWithTemplate(recipeCardTemplate, newTitle, lists.meals);
    // sortRecipes(recipeCardTemplate, selector, AllRecipes, "afterbegin", false);
    // searchRecipes();
}

export function createBreadcrumbs(breadcrumbsArray) {
  const breadcrumbContainer = document.getElementById('breadcrumbs');
  breadcrumbContainer.innerHTML = '';
  breadcrumbContainer.classList.add("divider");
  breadcrumbsArray.forEach((breadcrumb) => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');
    anchor.textContent = breadcrumb[0].charAt(0).toUpperCase() + breadcrumb[0].slice(1);
    anchor.href = breadcrumb[1];
    if (breadcrumb[1] === "#") {
      anchor.id = "activeBreadcrumb";
    }
    listItem.appendChild(anchor);
    breadcrumbContainer.appendChild(listItem);
  });
}
