import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
});

function ThemeProvider({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
