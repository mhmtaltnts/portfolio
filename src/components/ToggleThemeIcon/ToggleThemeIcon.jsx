import React, { useContext } from "react";
import "./ToggleThemeIcon.scss";
import { ThemeContext } from "../../context/ThemeContext";

function ToggleThemeIcon({}) {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggler">
      <p
        className="toggler--text"
        style={{
          color: isDarkTheme ? "white" : "black",
        }}
      >
        {isDarkTheme ? "Light " : "Dark "}
      </p>
      <div
        className="toggler--slider"
        onClick={() => toggleTheme()}
        style={{
          justifyContent: isDarkTheme ? "flex-start" : "flex-end",
        }}
      >
        <div className="toggler--slider--circle"></div>
      </div>
    </div>
  );
}

export default ToggleThemeIcon;
