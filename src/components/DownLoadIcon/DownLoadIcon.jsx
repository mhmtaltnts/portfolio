import React from "react";
import "./DownLoadIcon.scss";

function DownLoadIcon({ text }) {
  return (
    <div className="btn-con">
      <a href="#" className="main-btn">
        <span className="btn-text">{text}</span>
        <span className="btn-icon">
          <i className="fas fa-download"></i>
        </span>
      </a>
    </div>
  );
}

export default DownLoadIcon;
