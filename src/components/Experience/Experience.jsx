import React from "react";
import "./Experience.scss";

function Experience({ count, title1, title2 }) {
  return (
    <div className="about-item">
      <div className="abt-text">
        <p className="large-text">{count}</p>
        <p className="small-text">
          {title1}
          <br />
          {title2}
        </p>
      </div>
    </div>
  );
}

export default Experience;
