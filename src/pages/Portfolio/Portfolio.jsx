import React from "react";
import Image from "../../components/Image/Image";
import HoverItem from "../../components/HoverItem/HoverItem";
import "./Portfolio.scss";

const portfolios = [
  { img: "./src/assets/port1.jpg", alt: "", hrf: "#", icon: "fab fa-github" },
  { img: "./src/assets/port2.jpg", alt: "", hrf: "#", icon: "fab fa-github" },
  { img: "./src/assets/port3.jpg", alt: "", hrf: "#", icon: "fab fa-github" },
  { img: "./src/assets/port4.jpg", alt: "", hrf: "#", icon: "fab fa-github" },
  { img: "./src/assets/port5.jpg", alt: "", hrf: "#", icon: "fab fa-github" },
  { img: "./src/assets/port6.jpg", alt: "", hrf: "#", icon: "fab fa-github" },
];

function Portfolio() {
  return (
    <section className="container" id="portfolio">
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="bg-text">My Work</span>
        </h2>
      </div>
      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        {portfolios.map((port) => (
          <div className="portfolio-item" key={port.img}>
            <Image img={port.img} alt={port.alt} />
            <HoverItem hrf={port.hrf} icon={port.icon} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
