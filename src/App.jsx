import { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Header/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Layout from "./components/Layout";
import Controllers from "./components/Controllers/Controllers";
import ToggleThemeIcon from "./components/ToggleThemeIcon/ToggleThemeIcon";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDarkTheme ? "main-content" : "light-mode"}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Layout>
      <Controllers />
      <ToggleThemeIcon />
    </div>
  );
}

export default App;
