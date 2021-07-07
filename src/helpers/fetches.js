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

const fetchUserData = async (userId) => {
    const url = `${ C.baseUrl }/user/?userId=${ userId }&apiToken=${ C.apiToken }`;
    const respond = await fetch(url);    
    if (respond.ok) {
        const data = await respond.json();
        return data;
    } else {
        console.error('Error: ', respond);
    };
};

export const fetchArticleDetails = async (articleId) => {
    const url = `${ C.baseUrl }/article-details/?articleId=${ articleId }&apiToken=${ C.apiToken }`;
    const respond = await fetch(url);
    if (respond.ok) {
        const data = await respond.json();
        const user = await fetchUserData(data.sellerId)
        const articleDataAndUser = { article: data, user: user }
        return articleDataAndUser;
    } else {
        console.error('Error: ', respond);
    };
};
