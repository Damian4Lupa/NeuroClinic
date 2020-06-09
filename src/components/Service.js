import React from "react";
import { Link } from "react-router-dom";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

import support1 from '../img/Service/support1.svg'
import counseling from '../img/Service/counseling.svg'
import emergency1 from '../img/Service/emergency1.svg'
import surgery from '../img/Service/surgery.svg'

// import premium from '../img/Service/premium.svg'
// import lab1 from '../img/Service/lab1.svg'
// import emergency2 from '../img/Service/emergency2.svg'
// import app from '../img/Service/app.svg'
// import lab2 from '../img/Service/lab2.svg'
// import online1 from '../img/Service/online1.svg'
// import online2 from '../img/Service/online2.svg'
// import support2 from '../img/Service/support2.svg'

function Service() {
  return (
    <section id="service" className="home-section">
      <div className="container">
        <div className="row">
          <div className="col-3 mr-4">
          <div className="section-title">
            <h2 className="ser-title">Our service</h2>
            <hr className="botm-line" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              cillum.
            </p>

            <Link to="/Service">
                <button className="btn blue-btn">Read more</button>
              </Link>
              </div>
          </div>

          <div className="col-4">
            <div className="service-info">
              <div className="icon">
                <img src={support1} alt="" />
              </div>
              <div className="icon-info">
                <h4>24 Hour Support</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
              <img src={emergency1} alt="" />
              </div>
              <div className="icon-info">
                <h4>Emergency Services</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* <div className="service-info">
              <div className="icon">
              <img src={lab1} alt="" />
              </div>
              <div className="icon-info">
                <h4>Medical Lab</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div> */}
          </div>

          <div className="col-4">
            <div className="service-info">
              <div className="icon">
              <img src={counseling} alt="" />
              </div>
              <div className="icon-info">
                <h4>Medical Counseling</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div className="service-info">
              <div className="icon">
              <img src={surgery} alt="" />
              </div>
              <div className="icon-info">
                <h4>Surgery</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* <div className="service-info">
              <div className="icon">
              <img src={premium} alt="" />
              </div>
              <div className="icon-info">
                <h4>Premium Healthcare</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
