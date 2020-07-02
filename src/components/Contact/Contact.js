import React from "react";
import "../../App.css";
import "../Contact/Contact.css";

function Contact() {
  return (
    <section className="section-contact" id="contact">
      <div>
        <p className="bg-contact">Contact</p>
      </div>
      <h2>contact.</h2>
      <div className="contact-container">
        <div className="contact-inner">
          <h3>I'm based in Seattle, WA and...</h3>
          <p className="contact-p">
            I enjoy working closely with each of my clients which allows me to
            provide high quality, professional, yet personal service. This
            creates an environment that is flexible allowing me to adapt to my
            clients needs and expectations.
          </p>
          <h3>I can be reached via e-mail:</h3>
          <ul className="contact-info">
            <li>ashuraliev@gmail.com</li>
          </ul>
        </div>
        <br />
        <br />
        <div className="contact-inner">
          <h3>Online presense / links:</h3>
          <ul className="contact-info">
            <li>http://ashuraliev.com</li>
            <li>https://www.linkedin.com/in/jak-ashuraliev</li>
            <li>https://github.com/jak-ashuraliev</li>
            <li>https://www.behance.net/jak-ashuraliev</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
