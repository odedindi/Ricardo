// ==================== constants =========================
import * as C from '../helpers/constants'
// ========================================================

export const searchResults = (articles: SearchResponse) => ({
    type: C.SEARCH_RESULTS,
    payload: articles
});



export const chosenArticle = (article: ChosenArticle) => ({
    type: C.ARTICLE_CHOSEN,
    payload: article
});

