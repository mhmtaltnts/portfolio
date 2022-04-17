import React from "react";
import "./TimeLine.scss";

function TimeLine({ duration, subject, where, desc }) {
  return (
    <div className="timeline-item">
      <div className="tl-icon">
        <i className="fas fa-briefcase"></i>
      </div>
      <p className="tl-duration">{duration}</p>
      <h5>
        {subject}
        <span> - {where}</span>
      </h5>
      <p>{desc}</p>
    </div>
  );
}

export default TimeLine;
