import React, { useContext } from "react"
import DownLoadIcon from "../../components/DownLoadIcon/DownLoadIcon"
import Experience from "../../components/Experience/Experience"
import MainTitle from "../../components/MainTitle/MainTitle"
import ProgressBar from "../../components/ProgressBar/ProgressBar"
import TimeLine from "../../components/TimeLine/TimeLine"
import { ThemeContext } from "../../context/ThemeContext"
import "./About.scss"
const exp = {
  en: [
    { count: "25+", title1: "Projects", title2: "Completed" },
    { count: "4+", title1: "Years of", title2: "Experience" }
  ],
  tr: [
    { count: "25+", title1: "Proje", title2: "Tamamlandı" },
    { count: "6+", title1: "Yıl", title2: "Deneyim" }
  ]
}
const edu = [
  { title: "html5", amount: "80%" },
  { title: "css3", amount: "95%" },
  { title: "javascript", amount: "85%" },
  { title: "ReactJS", amount: "83%" },
  { title: "NodeJS", amount: "60%" },
  { title: "Python", amount: "80%" }
]
const life = {
  tr: [
    {
      duration: "1991-1996",
      subject: "Basic, Fortran",
      where: "Marmara Universitesi",
      desc: "Bilgisayarla tanıştığım ilk yıllar. Fortran'la integral hesabı yapmayı öğrendik. Basic çalıştık."
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
      desc: "Son altı yıl bilgisayara baştan başladım diyebilirim. C++, Java, C#, Python, JavaScript çalıştım ve temel bilgileri öğrendim. Yapay zeka ve kuantum bilgisayarlar konusunda çalışmalar yaptım. Son olarak web geliştirme konusunda uzman olmaya karar verdim. Bu amaç doğrultusunda React'ı seçtim. Bu portfolyo site MacLinz tarafından hazırlanan html/css şablonu üzerine benim tarafımdan reactjs ile yapılmıştır."
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
const about = {
  en: {
    h2: "About Me",
    h2_span: "my stats",
    p1_1: "I completed my education in the field of English Physics teaching. During my university education, I took computer lessons as a minor branch.",
    p1_2: "Six years ago I decided to go deep into coding.",
    p1_3: "After come across with React, I focused on Javascript, HTML, CSS. Striving in different areas of the computer technology provided me with extensive knowledge and experience about it. Now I am 2 years experienced react developer. I have a lot to learn.",
    h4_1: "My Skills",
    h4_2: "My Timeline"
  },
  tr: {
    h2: "Hakkımda",
    h2_span: "İstatistikler",
    p1_1: "Eğitimimi İngilizce Fizik öğretmenliği alanında tamamladım. Üniversite eğitimim sırasında yan dal olarak bilgisayar dersleri aldım.",
    p1_2: "Altı yıl önce kodlamanın derinliklerine inmeye karar verdim.",
    p1_3: "React ile tanıştıktan sonra Javascript, HTML, CSS üzerine yoğunlaştım. Reactjs öğrenme sürecinde 25 proje tamamladım; github'a yükledim. Şimdi 6 yıl deneyimli web geliştiriciyim. Öğrenecek çok şeyim var.",
    h4_1: "Beceriler",
    h4_2: "Zaman Şeridi"
  }
}
function About() {
  const { lang } = useContext(ThemeContext)
  return (
    <section className="container about" id="about">
      <MainTitle title1={about[lang].h2} title2={about[lang].h2_span} />
      <div className="about-container">
        <div className="left-about">
          <h4>{about[lang].h4}</h4>
          <p>
            {about[lang].p1_1}
            <br />
            {about[lang].p1_2}
            <br />
            <br />
            {about[lang].p1_3}
          </p>
          <DownLoadIcon text="Download CV" />
        </div>
        <div className="right-about">
          {exp[lang].map(item => (
            <Experience key={item.title1 + item.title2} count={item.count} title1={item.title1} title2={item.title2} />
          ))}
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">{about[lang].h4_1}</h4>
        <div className="progress-bars">
          {edu.map(item => (
            <ProgressBar key={item.title} title={item.title} amount={item.amount} cls={item.cls} />
          ))}
        </div>
      </div>
      <h4 className="stat-title">{about[lang].h4_2}</h4>
      <div className="timeline">
        {life[lang].map(item => (
          <TimeLine key={item.duration} duration={item.duration} subject={item.subject} where={item.where} desc={item.desc} />
        ))}
      </div>
    </section>
  )
}

export default About
