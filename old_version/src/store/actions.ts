// ==================== constants =========================
import * as C from '../helpers/constants';
// ========================================================

export const searchResults = (articles: SearchResponse) => ({
	type: C.SEARCH_RESULTS,
	payload: articles,
});

export const chosenArticle = (article: ChosenArticle) => ({
	type: C.ARTICLE_CHOSEN,
	payload: article,
});

export const addArticleToCart = (article: SearchArticle) => ({
	type: C.ADD_TO_CART,
	payload: article,
});

export const removeArticleFromCart = (id: Id) => ({
	type: C.REMOVE_FROM_CART,
	payload: id,
});
