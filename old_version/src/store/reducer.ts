// ==================== constants =========================
import * as C from '../helpers/constants';
// ========================================================

export const initialState: State = {
	cartItems: [],
	chosenArticle: {},
	searchResults: {},
};

export const reducer = (
	state: State = initialState,
	action: Action,
): State => {
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
		case C.ADD_TO_CART:
			return {
				...state,
				cartItems: [...state.cartItems, action.payload],
			};
		case C.REMOVE_FROM_CART:
			return {
				...state,
				cartItems: [
					...state.cartItems.filter(
						(item: SearchArticle) => item.id !== action.payload,
					),
				],
			};
		default:
			return state;
	}
};
