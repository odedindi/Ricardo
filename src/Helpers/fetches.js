import * as C from './constants'


export const fetchSearchResults = async (searchText) => {
    const url = `${ C.baseUrl }/search/?searchText=${ searchText }&apiToken=${ C.apiToken }`;
    
    const respond = await fetch(url);
    if (respond.ok) {
        const data = await respond.json();
        return data;
    } else {
        console.error('Error: ', respond);
    };
};