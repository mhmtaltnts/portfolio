import React from "react"
import "./MainTitle.scss"

function MainTitle({ title1, title2 }) {
  return (
    <div className="main-title">
      <h2>
        {title1}
        <span className="bg-text">{title2}</span>
      </h2>
    </div>
  )
}

export default MainTitle
