import React from "react";

function Icon({ hrf, icn }) {
  return (
    <div className="icons">
      <a className="icon" href={hrf}>
        <i className={icn}></i>
      </a>
    </div>
  );
}

export default Icon;
