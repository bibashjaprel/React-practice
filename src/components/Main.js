import React from 'react';
import '../css/main.css'
import aboutimg from '../images/about.jpg'
const Main = () => {
  return(
    <section className="section about" id="about">
    <div className="title">
      <h1>About me</h1>
    </div>

    <div className="about-center container">
      <div className="left" data-aos="fade-right" data-aos-duration="1500">
        <img src={aboutimg} alt="" />
      </div>
      <div className="right" data-aos="fade-left" data-aos-duration="1500">
        <h1>I'm Bibash a <span id="type2"></span></h1>
        <p>
          Hello sir!
          My name's Bibash Japrel, i'm 17 years old and I was born and rised in Nepal,Bajhang , I'm Secondary level
          student in Kankali Secondary School, currently i'm learning server side scripting language(php), i'm not a pro
          on coding
          however i love coding.
        </p>
        <a href="#" className="btn">Download</a>
      </div>
    </div>
  </section>

  )
};

export default Main;
