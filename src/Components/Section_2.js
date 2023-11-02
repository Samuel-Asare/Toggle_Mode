import React, { useContext } from "react";
import { MyThemeContext } from "./Context/ThemeContextProviderComponent";
import "../css/Section2.css";

const Section2 = () => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <div
            className="section"
            style={{
                background: night ? "#171716" : "#fff",
                color: night ? "#fff" : "#000",
            }}
        >
            <h1>Section 2</h1>
        </div>
    );
};

export default Section2;
