import React, { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"
import "./Selection.scss"
const options = [
  {
    label: "Türkçe",
    value: "tr"
  },
  {
    label: "Eglish",
    value: "en"
  }
]

function Selection() {
  const { lang, toggleLang } = useContext(ThemeContext)
  console.log(lang)

  return (
    <div className="select-container">
      <select value={lang} onChange={e => toggleLang(e.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selection
