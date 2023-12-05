async function fetchRecipes(query) {
  try {
    // Using TheMealDB API for fetching recipe categories
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const recipeData = await response.json();

    
    displayRecipes(recipeData.categories);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}


function displayRecipes(categories) {
  
  console.log(categories);
}

  