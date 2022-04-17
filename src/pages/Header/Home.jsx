import React from "react";
import "./Home.scss";

const hero = "./src/assets/hero1.png";

function Home() {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={hero} alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>Mehmet Altuntaş.</span> A Web Developer.
          </h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites. I don't have a formal education or license as a web
            developer.
          </p>
          <p>But I have advanced knowledge and skills with:</p>
          <ul className="header-list">
            <li>HTML/XHTML, CSS, JavaScript</li>
            <li>Server/client side architecture</li>
            <li>Coding in Python, PHP, Java, Node.js</li>
            <li>Ability to utilize a database</li>
            <li>Creating single page application with ReactJS</li>
          </ul>
          <div className="btn-con">
            <a href="" className="main-btn">
              <span className="btn-text">Download CV</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;
