import React from 'react';
import "../css/contactMe.css"
const ContactMe = () => {
  return(
      <>
    <section className="section contact" id="contact">
    <div className="title">
      <h1>Contact me</h1>
    </div>

    <div className="contact-center container">
      <div className="left" data-aos="fade-dowm" data-aos-duration="1500">
        <h2>Get In Touch</h2>
        <p>
          Hello Everyone! Have a great day :) I am here to help you. If you want to know something or you have any
          suggestion then please mail me. Thank You.
        </p>
        <div>
          <span className="icon"><i className="fas fa-user"></i></span>
          <span className="content">
            <h3>Name</h3>
            <span>Bibash Japrel</span>
          </span>
        </div>

        <div>
          <span className="icon"><i className="fas fa-map-marker-alt"></i></span>
          <span className="content">
            <h3>Address</h3>
            <span>Nepal,Bajhang</span>
          </span>
        </div>

        <div>
          <span className="icon"><i className="fas fa-envelope"></i></span>
          <span className="content">
            <h3>Email</h3>
            <span>root9t2@gmail.com</span>
          </span>
        </div>
      </div>

      <div className="right" data-aos="fade-up" data-aos-duration="1500">
        <form action="" method="POST" className="form">
          <h2>Message Me</h2>
          <div>
            <input type="text" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>

          <textarea name="message" id="" cols="30" rows="10" placeholder="Your message">
            </textarea>
          <button type="submit" className="btn btn-form">Send message</button>
        </form>
      </div>
    </div>
  </section>

  <footer>
    <p>Created By <span>Bibash</span> | &copy; 2021 All rights reserved</p>
  </footer>
  </>
  )
};

export default ContactMe;
