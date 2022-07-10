import React from "react";
import "./MainTitle.scss";

function MainTitle({ txt1, txt2, txt3 }) {
  return (
    <div className="main-title">
      <h2>
        {txt1} <span>{txt2}</span>
        <span className="bg-text">{txt3}</span>
      </h2>
    </div>
  );
}

export default MainTitle;
