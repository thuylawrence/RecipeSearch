const baseAPI = 'https://www.themealdb.com/api/json/v1/1/';

async function convertToJson(res) {
    if (res.ok) {
        return await res.json();
    } else {
        let json = await res.json();
        throw { name: "servicesError", message: json };
    }
}

export default class ExternalServices {
    construction(){

    }
    async getRecipesByCategory(category) {
        return fetch(`${baseAPI}filter.php?c=${category}`).then(convertToJson);
    }
    async getRecipesByName(name){
        return fetch(`${baseAPI}search.php?s=${name}`).then(convertToJson);
        // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
    }
}
