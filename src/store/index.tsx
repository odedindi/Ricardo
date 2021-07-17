// ====================== react ===========================
import * as React from 'react';
// ================ reducer and state =====================
import { initialState, reducer } from './reducer';
// ========================================================

const Store = React.createContext<Store>([initialState, reducer]);

const useStore = (): Store => React.useContext(Store);

const StoreProvider: React.FC = ({ children }): JSX.Element => {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<Store.Provider value={[state, dispatch]}>
			{children}
		</Store.Provider>
	);
};

export { useStore, StoreProvider };
