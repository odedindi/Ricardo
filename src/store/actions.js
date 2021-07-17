// ==================== constants =========================
import * as C from '../helpers/constants';

export const searchResults = (articles) => ({
	type: C.SEARCH_RESULTS,
	payload: articles,
});

export const chosenArticle = (article) => ({
	type: C.ARTICLE_CHOSEN,
	payload: article,
});
