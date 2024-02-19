const TRAVEL_ENDPOINT ='https://659e00a647ae28b0bd350923.mockapi.io/Travel';

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

//above I have to create an instance of the API handler class, so that this instance can be imported and used with other components