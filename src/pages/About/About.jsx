import React from "react";
import DownLoadIcon from "../../components/DownLoadIcon/DownLoadIcon";
import Experience from "../../components/Experience/Experience";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import TimeLine from "../../components/TimeLine/TimeLine";
import "./About.scss";
const exp = [
  { count: "19+", title1: "Projects", title2: "Completed" },
  { count: "2+", title1: "Years of", title2: "Experience" },
];
const edu = [
  { title: "html5", amount: "80%" },
  { title: "css3", amount: "95%" },
  { title: "javascript", amount: "85%" },
  { title: "ReactJS", amount: "67%" },
  { title: "NodeJS", amount: "60%" },
  { title: "Python", amount: "80%" },
];
const life = [
  {
    duration: "1991-1996",
    subject: "Basic, Fortran",
    where: "Marmara University",
    desc: "Years when I first met computers. I remember doing integral calculations with Fortran.",
  },
  {
    duration: "1996-2000",
    subject: "Word, Excell, Powerpoint",
    where: "Ivan Shahavishvili University",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasvero fugit.",
  },
  {
    duration: "2001-2009",
    subject: "Maya, 3dMax, 3D Modeling and Animation",
    where: "Yeditepe University",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasvero fugit.",
  },
  {
    duration: "2009-2016",
    subject: "Data Science",
    where: "Yüzinciyıl University",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasvero fugit.",
  },
  {
    duration: "2016-present",
    subject: "Web Development",
    where: "Self Study",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasvero fugit.",
  },
];
function About() {
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
            I completed my education in the field of English Physics teaching.
            During my university education, I took computer lessons as a minor
            branch.
            <br />
            Six years ago I decided to go deep into coding. I have always been
            interested in computer technology. Even when I was working as an
            English Physics teacher, I couldn't stay away from the computer. I
            spent most of my time in front of the computer. Firsly, I was
            interested in 3D drawing and animation with computers. Because I was
            thinking of designing games with Java.
            <br />
            <br />
            After come across with React, I focused on Javascript, HTML, CSS.
            Striving in different areas of the computer technology provided me
            with extensive knowledge and experience about it. Now I am 2 years
            experienced react developer. I have a lot to learn.
          </p>
          <DownLoadIcon text="Download CV" />
        </div>
        <div className="right-about">
          {exp.map((item) => (
            <Experience
              key={item.title1 + item.title2}
              count={item.count}
              title1={item.title1}
              title2={item.title2}
            />
          ))}
        </div>
      </div>
      <div className="about-stats">
        <h4 className="stat-title">My Skills</h4>
        <div className="progress-bars">
          {edu.map((item) => (
            <ProgressBar
              key={item.title}
              title={item.title}
              amount={item.amount}
              cls={item.cls}
            />
          ))}
        </div>
      </div>
      <h4 className="stat-title">My Timeline</h4>
      <div className="timeline">
        {life.map((item) => (
          <TimeLine
            key={item.duration}
            duration={item.duration}
            subject={item.subject}
            where={item.where}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
}

export default About;
