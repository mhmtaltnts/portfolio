import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDark: true,
  isLang: "en",
  toggleLang: () => {},
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [isLang, setLang] = useState("en");
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLang = () => {
    setLang((pre) => !pre);
  };
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isLang, toggleLang }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
