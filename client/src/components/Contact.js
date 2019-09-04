import React from "react";
import "../pages/Contact.css"
// import "./background.css"
const ContactForm = () => {
  return (
  <div className = 'container-fluid bg'>
    
    <div className="col-md-6 col-12 mx-auto">
      <div className="contact-card card shadow mt-4 mb-5">
        <div className="card-header text-center">Send Me a Message</div>
        <div className="card-body">
          <form
            action="https://formspree.io/mrubenstein6192@gmail.com"
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
              />
              
            </div>
            <label htmlFor="email">Your Email</label>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="your_email@email.com"
                name="_replyto"
              />
             
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Message</label>
              <textarea
                placeholder="Write message here."
                className="form-control"
                id="text-area"
                type="text"
                rows="3"
                name="message"
              />
            </div>
            <div className="form-group">
              <input className="btn btn-primary" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>

    
  </div>
  );
};

export default ContactForm;