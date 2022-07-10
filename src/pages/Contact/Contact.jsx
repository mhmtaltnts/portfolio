import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import MainTitle from "../../components/MainTitle/MainTitle";
import "./Contact.scss";

function Contact() {
  return (
    <section class="container contact" id="contact">
      <div class="contact-container">
        <MainTitle txt1="Contact" txt2="Me" txt3="Contact" />
        <div class="contact-content-con">
          <div class="left-contact">
            <h4>Contact me here</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
              laborum numquam? Quam excepturi perspiciatis quas quasi.
            </p>
            <div class="contact-info">
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>: London, united Kingdom</p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>: maclinzuniversal@gmail.com</span>
                </p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-user-graduate"></i>
                  <span>Education</span>
                </div>
                <p>
                  <span>: Sussex University, East Sussex</span>
                </p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-user-graduate"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span>: 07522670617</span>
                </p>
              </div>
              <div class="contact-item">
                <div class="icon">
                  <i class="fas fa-globe-africa"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span>: Afrikaans, English, Spanish</span>
                </p>
              </div>
            </div>
            <div class="contact-icons">
              <div class="contact-icon">
                <a href="www.facebook.com" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="right-contact">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
