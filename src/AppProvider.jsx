import React, {useContext,useReducer} from "react";

const AppContext = React.createContext();

const useAppContext = () => {
    return useContext(AppContext);
};
const initialState = {
    cows: [],
    cow:{}
};

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_COW":
            return {
                ...state, cows: [...state.cows, action.payload]
            }
        case "SELECTED_COW":
            return {
                ...state, cow: action.payload
            }
        case "DELETE_COW":
            return {
                ...state, cows: state.cows.filter(cow => cow._id !== action.payload)
            }
        case "UPDATE_COW":
            return {
                ...state, cows: state.cows.map(cow => {
                    if (cow._id === action.payload._id) {
                        return action.payload;
                    }
                    return cow;
                })
            }
        case "GET_COWS":
            return {
                ...state, cows: action.payload
            }
        case "SEARCH_COWS":
            return {
                ...state, cows: action.payload
            }
        default:
            return state;
    }
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{cows: state.cows, cow:state.cow, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };