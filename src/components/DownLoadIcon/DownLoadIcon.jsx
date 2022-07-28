import React from "react"
import "./DownLoadIcon.scss"

function DownLoadIcon({ text, hrf }) {
  return (
    <div className="btn-con">
      <a href={hrf} className="main-btn" download>
        <span className="btn-text">{text}</span>
        <span className="btn-icon">
          <i className="fas fa-download"></i>
        </span>
      </a>
    </div>
  )
}

export default DownLoadIcon
