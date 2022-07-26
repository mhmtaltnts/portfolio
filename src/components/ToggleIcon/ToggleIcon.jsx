import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./ToggleIcon.scss"

function ToggleIcon({ top }) {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="toggler" style={{ top: `${top}`, right: "3%" }}>
      <p className="toggler--text">{theme ? "Dark" : "Light"}</p>
      <div
        className="toggler--slider"
        onClick={() => toggleTheme()}
        style={{
          justifyContent: theme ? "flex-start" : "flex-end"
        }}
      >
        <div className="toggler--slider--circle"></div>
      </div>
    </div>
  )
}

export default ToggleIcon
