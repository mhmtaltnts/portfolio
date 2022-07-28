import React from "react"
import "./ContactItem.scss"

function ContactItem({ icon, via, value }) {
  return (
    <div className="contact-item">
      <div className="icon">
        <i className={icon}></i>
        <span>{via} :</span>
      </div>
      <p>{value} </p>
    </div>
  )
}

export default ContactItem
