import React from "react";
import "./HoverItem.scss";

function Icon({ hrf, icn }) {
  return (
    <div className="icons">
      <a className="icon" href={hrf}>
        <i className={icn}></i>
      </a>
    </div>
  );
}
function HoverItem({ hrf, icon }) {
  return (
    <div className="hover-items">
      <h3>Project Source</h3>
      <Icon {...hrf} icn={icon} />
    </div>
  );
}

export default HoverItem;
