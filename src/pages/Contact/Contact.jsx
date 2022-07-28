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
    ["fas fa-phone", "Mobile Number", "+905392882703"]
  ],
  tr: [
    ["fas fa-map-marker-alt", "Adres", "Gebze/Kocaeli Türkiye"],
    ["fas fa-envelope", "Eposta", "12mart1973@gmail.com"],
    ["fas fa-phone", "Cep Telefonu", "+905392882703"]
  ]
}
function Contact() {
  const { lang } = useContext(ThemeContext)
  return (
    <section className="container contact" id="contact">
      <div className="contact-container">
        <MainTitle title1={title[lang][0]} title2={title[lang][1]} />
        <div className="contact-info">
          {contactitems[lang].map(item => (
            <ContactItem icon={item[0]} via={item[1]} value={item[2]} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
