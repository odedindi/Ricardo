// ==================== constants =========================
import * as C from '../helpers/constants';
// ========================================================

export const initialState = {
	searchResults: [],
	chosenArticle: {},
};

export const reducer = (state = initialState, action) => {
	if (process.env.NODE_ENV === 'development') {
		console.log('from the reducer: ', action);
	}
	switch (action.type) {
		case C.SEARCH_RESULTS:
			return {
				...state,
				searchResults: action.payload,
			};
		case C.ARTICLE_CHOSEN:
			return {
				...state,
				chosenArticle: action.payload,
			};
		default:
			return state;
	}
};
