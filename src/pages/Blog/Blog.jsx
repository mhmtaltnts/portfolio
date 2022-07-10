import React from "react";
import MainTitle from "../../components/MainTitle/MainTitle";
import "./Blog.scss";

const blogs = [
  {
    source: "/src/assets/port6.jpg",
    title: "How to Create Your Own Website",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    source: "/src/assets/blog1.jpg",
    title: "How to Become an Expert in Web Design",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    source: "/src/assets/blog2.jpg",
    title: "Become a Web Designer in 10 Days",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    source: "/src/assets/blog3.jpg",
    title: "Debbuging made easy with Web Inspector",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    source: "/src/assets/port1.jpg",
    title: "Get started with Web Design and UI Design",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
  {
    source: "/src/assets/port3.jpg",
    title: "This is what you need to know about Web Design",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus natus voluptas, eos obcaecati recusandae amet?",
  },
];

const Card = ({ source, title, text }) => {
  return (
    <div className="blog">
      <img src={source} alt="" />
      <div className="blog-text">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

function Blog() {
  return (
    <section className="container" id="blogs">
      <div className="blogs-content">
        <MainTitle txt1="My" txt2="Blogs" txt3="Blogs" />
        <div className="blogs">
          {blogs.map((item) => (
            <Card source={item.source} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
