// ====================== react ===========================
import { createContext, useContext, useReducer } from "react";
// ================ reducer and state =====================
import { initialState, reducer } from './reducer'
// ========================================================
const Store = createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
    const [ articles, dispatch ] = useReducer(reducer, initialState);

    return (
        <Store.Provider value={[ articles, dispatch ]}>
            { children }
        </Store.Provider>
    )
};