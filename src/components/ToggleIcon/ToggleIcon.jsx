import React, { useContext } from "react";
import "./ToggleIcon.scss";

function ToggleIcon({ top, text, altText, theme, toggle }) {
  return (
    <div className="toggler" style={{ top: `${top}`, right: "3%" }}>
      <p
        className="toggler--text"
        style={{
          color: theme ? "white" : "black",
        }}
      >
        {theme ? text : altText}
      </p>
      <div
        className="toggler--slider"
        onClick={() => toggle()}
        style={{
          justifyContent: theme ? "flex-start" : "flex-end",
        }}
      >
        <div className="toggler--slider--circle"></div>
      </div>
    </div>
  );
}

export default ToggleIcon;
