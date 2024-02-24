const TRAVEL_ENDPOINT ='https://659e00a647ae28b0bd350923.mockapi.io/Travel';

//This is the same as the Travel/blog API except it is only used for recipes. No PUT is needed here since the user will only be viewing the recipes, not entering any new information.

class RecipeApi {
    get = async () => {
        try {
        const resp = await fetch(`${TRAVEL_ENDPOINT}/recipes`);
        const data = await resp.json();
        console.log(data);
        return data;
    } catch(e) {
        console.log('The API had an issue!', e);
    }
    }

}

export const recipeApi = new RecipeApi();

