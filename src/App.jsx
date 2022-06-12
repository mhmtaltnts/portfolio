import { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Header/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Layout from "./components/Layout";
import Controllers from "./components/Controllers/Controllers";
import ToggleIcon from "./components/ToggleIcon/ToggleIcon";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? "main-content" : "light-mode"}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <Controllers />
      <ToggleIcon
        top="0%"
        text="Light "
        altText="Dark"
        theme={isDark}
        toggle={toggleTheme}
      />
    </div>
  );
}

export default App;
