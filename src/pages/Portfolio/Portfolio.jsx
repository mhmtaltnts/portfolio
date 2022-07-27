import React, { useContext } from "react"
import Image from "../../components/Image/Image"
import HoverItem from "../../components/HoverItem/HoverItem"
import "./Portfolio.scss"
import MainTitle from "../../components/MainTitle/MainTitle"
import { ThemeContext } from "../../context/ThemeContext"

const portfolios = [
  { img: "./src/assets/port1.jpg", alt: "", hrf: "https://github.com/mhmtaltnts/portfolio", icon: "fab fa-github" },
  { img: "./src/assets/port2.jpg", alt: "", hrf: "https://github.com/mhmtaltnts/react-hooks", icon: "fab fa-github" },
  { img: "./src/assets/port3.jpg", alt: "", hrf: "https://github.com/mhmtaltnts/react-typescript", icon: "fab fa-github" },
  { img: "./src/assets/port4.jpg", alt: "", hrf: "https://github.com/mhmtaltnts/react_redux_app", icon: "fab fa-github" },
  { img: "./src/assets/port5.jpg", alt: "", hrf: "https://github.com/mhmtaltnts/custom_react_hook", icon: "fab fa-github" },
  { img: "./src/assets/port6.jpg", alt: "", hrf: "https://github.com/mhmtaltnts/mental", icon: "fab fa-github" }
]

const title = {
  en: ["My Portfolio", "My Work"],
  tr: ["Portfolyom", "Çalışmalarım"]
}

function Portfolio() {
  const { lang } = useContext(ThemeContext)
  return (
    <section className="container" id="portfolio">
      <MainTitle title1={title[lang][0]} title2={title[lang][1]} />
      <p className="port-text">Here is some of my work that I've done in various programming languages.</p>
      <div className="portfolios">
        {portfolios.map(port => (
          <div className="portfolio-item" key={port.img}>
            <Image img={port.img} alt={port.alt} />
            <HoverItem hrf={port.hrf} icon={port.icon} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
