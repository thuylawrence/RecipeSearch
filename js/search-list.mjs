import ExternalServices from "./ExternalServices.js";
import recipeList from "./recipeList.mjs";
import { getParam } from "./utils.mjs";

async function init(){
    
    const name = getParam("name"); 
    const dataSource = new ExternalServices();
    // console.log(cate)
    const lists = await dataSource.getRecipesByName(name);
    console.log(lists);

    recipeList("#recipeContainer", name, lists); // Call recipeList to render recipes
}

init();