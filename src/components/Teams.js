import React from 'react';
import '../css/teams.css'
import photo from '../images/about.png'
const Teams = () => {
  return(
      
  <section className="section theme" id="teams">
  <div className="title">
    <h1>My Teams</h1>
  </div>

  <div className="teams-center container">
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <div className="team">
              <div className="img-cover">
                <img src={photo} alt="" />
              </div>

              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis quod autem.
              </p>
            </div>
          </li>

          <li className="glide__slide">
            <div className="team">
              <div className="img-cover">
              <img src={photo} alt="" />
              </div>

              <h3>William Bost</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis quod autem.
              </p>
            </div>
          </li>


          <li className="glide__slide">
            <div className="team">
              <div className="img-cover">
                <img src={photo} alt="" />
              </div>

              <h3>John Smith</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis quod autem.
              </p>
            </div>
          </li>


          <li className="glide__slide">
            <div className="team">
              <div className="img-cover">
              <img src={photo} alt="" />
              </div>

              <h3>Newton baba</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis quod autem.
              </p>
            </div>
          </li>


          <li className="glide__slide">
            <div className="team">
              <div className="img-cover">
              <img src={photo} alt="" />
              </div>

              <h3>William johni</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis quod autem.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  )
};

export default Teams;
