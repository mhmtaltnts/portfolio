import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./ToggleIcon.scss"

const theme = {
  en: ["Dark", "Light"],
  tr: ["Koyu", "Açık"]
}

function ToggleIcon({ top }) {
  const { isDark, toggleTheme, lang } = useContext(ThemeContext)
  return (
    <div className="toggler" style={{ top: `${top}`, right: "3%" }}>
      <p className="toggler--text">{isDark ? theme[lang][1] : theme[lang][0]}</p>
      <div
        className="toggler--slider"
        onClick={() => toggleTheme()}
        style={{
          justifyContent: isDark ? "flex-start" : "flex-end"
        }}
      >
        <div className="toggler--slider--circle"></div>
      </div>
    </div>
  )
}

export default ToggleIcon
