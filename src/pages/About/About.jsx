import React, { useContext } from "react"
import DownLoadIcon from "../../components/DownLoadIcon/DownLoadIcon"
import Experience from "../../components/Experience/Experience"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import TimeLine from "../../components/TimeLine/TimeLine"
import { ThemeContext } from "../../context/ThemeContext"
import "./About.scss"
const exp = [
  { count: "19+", title1: "Projects", title2: "Completed" },
  { count: "2+", title1: "Years of", title2: "Experience" }
]
const edu = [
  { title: "html5", amount: "80%" },
  { title: "css3", amount: "95%" },
  { title: "javascript", amount: "85%" },
  { title: "ReactJS", amount: "67%" },
  { title: "NodeJS", amount: "60%" },
  { title: "Python", amount: "80%" }
]
const life = {
  tr: [
    {
      duration: "1991-1996",
      subject: "Basic, Fortran",
      where: "Marmara Universitesi",
      desc: "Bilgisayarla tanıştığım ilk yıllar. Fortran'la integral hesabı yapıyorduk."
    },
    {
      duration: "1996-2000",
      subject: "Mathlab, Word, Excell, Powerpoint",
      where: "Gürcistan Ivan Shahavishvili Üniversitesi",
      desc: "Yüksek lisans yaptım. Kuantum fiziği konusunda tezimi tamamladım. Tez sürecinde Mathlab, word, excell ve powerpoint kullandım. Maya ve 3D Max ile tanıştım. Bu tarihlerde 3D çizimlere ve animasyona ilgi duymaya başladım."
    },
    {
      duration: "2000-2009",
      subject: "Maya, 3dMax, 3D Modeling and Animation",
      where: "Yeditepe Universitesi",
      desc: "Animasyon konusunda İngilizce'den Türkçe'ye tercüme çalışmam oldu. Yeditepe Üniversitesi'nde Eğitim yönetimi ve denetimi konusunda yüksek lisans yaptım. İstatistik ve araştırma teknikleri çalıştım. "
    },
    {
      duration: "2009-2016",
      subject: "Veri Yönetimi",
      where: "Yüzinciyıl Universitsi",
      desc: "Doktoraya başladım. İstatistik ve araştırma teknikleri konusunda çalışmam devam etti. Görevim gereği hazırlamam gereken raporları   xml ve xsd kullanarak Altova desteğiyle pratik hale getirdim."
    },
    {
      duration: "2016-bugüne",
      subject: "Yapay Zeka, Kuantum Bilgisayarlar, Web Geliştirme",
      where: "Bireysel Çalışmalar",
      desc: "Son altı yıl bilgisayara baştan başladım diyebilirim. C++, Java, C#, Python, JavaScript çalıştım ve öğrendim. Yapay zeka ve kuantum bilgisayarlar konusunda çalışmalar yaptım. Son olarak web geliştirme konusunda uzman olmaya karar verdim. Bu amaç doğrultusunda React'ı seçtim. React konusunda uzman olmaya çalışıyorum. Epeyce mesafe kat ettim bu portfolyo sitemi react'la  bir html/css şablon kullanarak hazırladım."
    }
  ],
  en: [
    {
      duration: "1991-1996",
      subject: "Basic, Fortran",
      where: "Marmara University",
      desc: "Years when I first met computers. I remember doing integral calculations with Fortran."
    },
    {
      duration: "1996-2000",
      subject: "Mathlab, Word, Excell, Powerpoint",
      where: "Ivan Shahavishvili University",
      desc: "I have master's degree. I have completed my thesis on quantum physics. I used Mathlab, word, excel and powerpoint during the thesis process. I met Maya and 3D Max. Around this time, I became interested in 3D drawings and animation."
    },
    {
      duration: "2000-2009",
      subject: "Maya, 3dMax, 3D Modeling and Animation",
      where: "Yeditepe University",
      desc: "I had a translation work from English to Turkish on animation. I did my master's degree in Educational Administration and Supervision at Yeditepe University. I studied statistics and research techniques."
    },
    {
      duration: "2009-2016",
      subject: "Data Science",
      where: "Yüzinciyıl University",
      desc: "I started my doctorate. My work on statistics and research techniques continued. I made the reports that I had to prepare for my task practical with the support of Altova by using xml and xsd."
    },
    {
      duration: "2016-present",
      subject: "Web Development",
      where: "Self Study",
      desc: "In the last six years, I can say that I have started the computer from scratch. I studied and learned C++, Java, C#, Python, JavaScript. I worked on artificial intelligence and quantum computers. Finally, I decided to become an expert in web development. For this purpose, I chose React. I'm trying to be an expert on React. I've come a long way. I created this portfolio site using an html/css template with react."
    }
  ]
}
function About() {
  const { lang } = useContext(ThemeContext)
  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="bg-text">my stats</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="left-about">
          <h4>Information About me</h4>
          <p>
            I completed my education in the field of English Physics teaching. During my university education, I took computer lessons as a minor branch.
            <br />
            Six years ago I decided to go deep into coding. I have always been interested in computer technology. Even when I was working as an English Physics teacher, I couldn't stay away from the computer. I spent most of my time in front of the computer. Firsly, I was interested in 3D drawing and animation with computers. Because I was thinking of designing games with Java.
            <br />
            <br />
            After come across with React, I focused on Javascript, HTML, CSS. Striving in different areas of the computer technology provided me with extensive knowledge and experience about it. Now I am 2 years experienced react developer. I have a lot to learn.
          </p>
          <DownLoadIcon text="Download CV" />
        </div>
        <div className="right-about">
          {exp.map(item => (
            <Experience key={item.title1 + item.title2} count={item.count} title1={item.title1} title2={item.title2} />
          ))}
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {edu.map(item => (
            <ProgressBar key={item.title} title={item.title} amount={item.amount} cls={item.cls} />
          ))}
        </div>
      </div>
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {life[lang].map(item => (
          <TimeLine key={item.duration} duration={item.duration} subject={item.subject} where={item.where} desc={item.desc} />
        ))}
      </div>
    </section>
  )
}

export default About
