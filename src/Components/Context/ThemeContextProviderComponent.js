// STEP 1....................

import React from "react";
import { createContext, useReducer } from "react";

export const MyThemeContext = createContext();

const INITIAL_NIGHT_STATE = { nightmode: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                nightmode: !state.nightmode,
            };
        default:
            return state;
    }
};

export const ThemeContextProviderComponent = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_NIGHT_STATE);

    return (
        <MyThemeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </MyThemeContext.Provider>
    );
};
