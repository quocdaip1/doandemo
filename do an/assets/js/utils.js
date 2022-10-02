export const API_URL = 'https://6326e9d0ba4a9c47532ce235.mockapi.io/';

// thay vi .then de su ly promise
export async function GET_DATA(url, queryParams = null) {

    const dataJson = await fetch(url);

    const data = await dataJson.json();

    return data;
}

export async function POST_DATA(url, body) {
    const dataJson = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
    })

    const data = await dataJson.json();

    return data;
}

export async function PATCH_DATA(url, body) {
    const dataJson = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(body)
    })

    const data = await dataJson.json();

    return data;
}

export async function DELETE_DATA(url) {
    const dataJson = await fetch(url, {
        method: 'DELETE',
    })

    const data = await dataJson.json();

    return data;
}