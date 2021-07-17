import * as C from './constants';

export const fetchSearchResults = async (
	searchText: string,
): Promise<SearchResponse> => {
	const url = `${C.baseUrl}/search/?searchText=${searchText}&apiToken=${C.apiToken}`;
	const respond = await fetch(url);
	if (respond.ok) {
		const data = await respond.json();
		return data;
	} else {
		console.error('Error: ', respond.status);
	}
};

const fetchUserData = async (
	userId: Id,
): Promise<GetUserResponse> => {
	const url = `${C.baseUrl}/user/?userId=${userId}&apiToken=${C.apiToken}`;
	const respond = await fetch(url);
	if (respond.ok) {
		const data = await respond.json();
		return data;
	} else {
		console.error('Error: ', respond.status);
	}
};

export const fetchArticleDetails = async (
	articleId: Id,
): Promise<ChosenArticle> => {
	const url = `${C.baseUrl}/article-details/?articleId=${articleId}&apiToken=${C.apiToken}`;
	const respond = await fetch(url);
	if (respond.ok) {
		const data: ArticleResponse = await respond.json();
		const user: GetUserResponse = await fetchUserData(data.sellerId);
		const articleDataAndUser: ChosenArticle = {
			article: data,
			user: user,
		};
		return articleDataAndUser;
	} else {
		console.error('Error: ', respond.status);
	}
};
