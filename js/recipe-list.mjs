
import ExternalServices from "./ExternalServices.js";
import { getParam } from "./utils.mjs";
import recipeList from "./recipeList.mjs"; // import recipeList

async function init(){
    
    const category = getParam("product"); 
    const dataSource = new ExternalServices();
    // console.log(cate)
    const lists = await dataSource.getRecipesByCategory(category);
    console.log(lists);

    recipeList("#recipeContainer", category, lists); // Call recipeList to render recipes
}

init();
