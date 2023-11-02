import React, { useContext } from "react";
import { MyThemeContext } from "./Context/ThemeContextProviderComponent";
import "../css/HeroSection.css";

const HeroSection = () => {
    const theme = useContext(MyThemeContext);
    const night = theme.state.nightmode;

    return (
        <div
            className="hero"
            style={{
                background: night && "#171716",
                color: night ? "#fff" : "#000",
            }}
        >
            <h1>Hero Section</h1>
        </div>
    );
};

export default HeroSection;
