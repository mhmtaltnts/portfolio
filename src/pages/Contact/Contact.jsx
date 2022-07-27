import React, { useContext } from "react"
import MainTitle from "../../components/MainTitle/MainTitle"
import ContactItem from "../../components/ContactItem/ContactItem"
import { ThemeContext } from "../../context/ThemeContext"
import "./Contact.scss"
const title = {
  en: ["Contact", "Contact"],
  tr: ["İletişim", "İletişim"]
}

const contactitems = {
  en: [
    ["fas fa-map-marker-alt", "Location", "Gebze/Kocaeli Türkiye"],
    ["fas fa-envelope", "Email", "12mart1973@gmail.com"],
    ["fas fa-user-graduate", "Mobile Number", "+905392882703"]
  ],
  tr: [
    ["fas fa-map-marker-alt", "Adres", "Gebze/Kocaeli Türkiye"],
    ["fas fa-envelope", "Eposta", "12mart1973@gmail.com"],
    ["fas fa-user-graduate", "Cep Telefonu", "+905392882703"]
  ]
}
function Contact() {
  const { lang } = useContext(ThemeContext)
  return (
    <section className="container contact" id="contact">
      <div className="contact-container">
        <MainTitle title1={title[lang][0]} title2={title[lang][1]} />
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact me here</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum numquam? Quam excepturi perspiciatis quas quasi.</p>
            <div className="contact-info">
              {contactitems[lang].map(item => (
                <ContactItem icon={item[0]} via={item[1]} value={item[2]} />
              ))}
            </div>
          </div>

          <div className="right-contact">
            <form action="" class="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
              </div>
              <div className="submit-btn">
                <a href="#" class="main-btn">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
