const TRAVEL_ENDPOINT ='https://659e00a647ae28b0bd350923.mockapi.io/Travel';

//This component fetches my blogs from my API listed above. The asynchronous get function does not run any lines past the "await" until a response from the API is recieved. It fetches the data out of the API and the response is turned into a json. The catch is there in case there is nothing returned from the API.

class TravelApi {
    get = async () => {
        try {
        const resp = await fetch(`${TRAVEL_ENDPOINT}/blog`);
        const data = await resp.json();
        console.log(data);
        return data;
    } catch(e) {
        console.log('The API had an issue!', e);
    }
    }

    //The PUT fetches data from the API and then sends the new data into the API as a json (stringify turns the data into a JSON). The return awaits the data return from the API.

    put = async (blog) => {
        try{
            console.log(blog)
            const resp = await fetch(`${TRAVEL_ENDPOINT}/blog/${blog.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(blog)
        });
        return await resp.json();
        } catch (e) {
            console.log('Updating blog had an issue', e);
        }
    }
}

export const travelApi = new TravelApi();