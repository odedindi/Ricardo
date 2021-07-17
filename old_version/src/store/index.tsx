// ====================== react ===========================
import React, {
	createContext,
	Dispatch,
	useContext,
	useReducer,
} from 'react';
// ================ reducer and state =====================
import { initialState, reducer } from './reducer';
// ========================================================

export const Store = createContext<{
	state: State;
	dispatch: Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => undefined,
});

export const useStore = (): {
	state: State;
	dispatch: Dispatch<Action>;
} => useContext(Store);

export const StoreProvider: React.FC = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<Store.Provider value={{ state, dispatch }}>
			{children}
		</Store.Provider>
	);
};
