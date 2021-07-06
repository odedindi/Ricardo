// ==================== constants =========================
import * as C from '../Helpers/constants'


export const searchResultsAction = (articles) => ({
    type: C.SEARCH_RESULTS,
    payload: articles
});

export const chosenArticleAction = (article) => ({
    type: C.ARTICLE_CHOSEN,
    payload: article
})