import React, { useContext } from "react"
import DownLoadIcon from "../../components/DownLoadIcon/DownLoadIcon"
import "./Home.scss"
import { ThemeContext } from "../../context/ThemeContext"

const hero = "../assets/hero1.png"
const home = {
  en: {
    h1_1: "Hi, I'm",
    h1_2: "Muhammet Altuntaş.",
    h1_3: "A Web Developer",
    p1_1: "I'm a Web Developer, I love to create beautiful and functional websites.",
    p1_2: "I have advanced and intermediate knowledge and skills with:",
    ul1: ["HTML/XHTML, CSS, JavaScript", "Server/client side architecture", "Coding in Python, PHP, Java, Node.js", "Ability to utilize a database", "Creating single page application with ReactJS"]
  },
  tr: {
    h1_1: "Selam, Ben",
    h1_2: "Muhammet Altuntaş.",
    h1_3: "Web Geliştirici",
    p1_1: "Bir Web geliştirici olarak işlevsel ve güzel web siteleri oluşturmaktan hoşlanırım.",
    p1_2: "Aşağıdaki konularda ileri ve orta düzeyde becerilere sahibim:",
    ul1: ["HTML/XHTML, CSS, JavaScript", "Server/client side mimari", "Python, PHP, Java, Node.js ile kodlama", "Veri tabanı kullanımı", "ReactJS'la tek sayfa uygulama yaratımı"]
  }
}

function Home() {
  const { lang } = useContext(ThemeContext)
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src={hero} alt="hero" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            {home[lang].h1_1} <span>{home[lang].h1_2}</span> {home[lang].h1_3}
          </h1>
          <p>
            {home[lang].p1_1}
            <br />
            {home[lang].p1_2}
          </p>
          <ul className="header-list">
            {home[lang].ul1.map(item => (
              <li>{item}</li>
            ))}
          </ul>
          <DownLoadIcon text="Download CV" hrf="../assets/resume-CV.pdf" />
        </div>
      </div>
    </header>
  )
}

export default Home
