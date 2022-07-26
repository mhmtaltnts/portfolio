import React, { createContext, useState } from "react"

export const ThemeContext = createContext({
  isDark: true,
  lang: "en",
  toggleLang: () => {},
  toggleTheme: () => {}
})

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)
  const [lang, setLang] = useState("en")

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const toggleLang = pre => {
    setLang(pre)
  }
  return <ThemeContext.Provider value={{ isDark, toggleTheme, lang, toggleLang }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
