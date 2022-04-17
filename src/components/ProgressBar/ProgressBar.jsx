import React, { useContext } from "react";
import "./ProgressBar.scss";
import { ThemeContext } from "../../context/ThemeContext";

function ProgressBar({ title, amount }) {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const color = isDarkTheme ? "#27ae60" : "#f56692";
  return (
    <div className="progress-bar">
      <p className="prog-title">{title}</p>
      <div className="progress-con">
        <p className="prog-text">{amount}</p>
        <div className="progress">
          <span
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              backgroundColor: color,
              transition: "all 0.4s ease-in-out",
              width: amount,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
