const TRAVEL_ENDPOINT ='https://659e00a647ae28b0bd350923.mockapi.io/Travel';

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

