import React from "react"

function ContactForm() {
  return (
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
  )
}

export default ContactForm
