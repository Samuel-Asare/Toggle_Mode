import React from "react";
import "../css/ToggleButton.css";
import sun from "../asset/icon-sun.svg";
import moon from "../asset/icon-moon.svg";

// STEP 3.......................
import { useContext } from "react";
import { MyThemeContext } from "./Context/ThemeContextProviderComponent";

const ToggleButton = () => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    const handleClick = () => {
        theme.dispatch({ type: "TOGGLE" });
    };

    return (
        <div className="toggle">
            <img src={sun} alt="sun icon" />
            <div
                className="toggle_circle"
                onClick={handleClick}
                style={{ left: night ? "1px" : "29px" }}
            ></div>
            <img src={moon} alt="moon icon" />
        </div>
    );
};

export default ToggleButton;
