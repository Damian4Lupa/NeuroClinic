import React from "react";

import "../styles/GlobalStyle.css";
import "../styles/HomePage.css";

import bma from "../img/Partners/bma.png";
import cleanMed from "../img/Partners/CleanMed.png";
import oneHealth from "../img/Partners/one-health.png";
import uniWroc from "../img/Partners/uni-wroc.png";
import unnamed from "../img/Partners/unnamed.png";

function Partners() {
  return (
    <section id="partner" className="partner-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col-md-12">
              <h2 className="ser-title">Our partner</h2>
              <hr className="botm-line" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row partner-position">
          <div className="col">
            <div className="partner">
              <a href="#">
                <img src={bma} alt="" height="50" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={uniWroc} alt="" height="50" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={oneHealth} alt="" height="60" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={unnamed} alt="" height="75" />
              </a>
            </div>
            <div className="partner">
              <a href="#">
                <img src={cleanMed} alt="" height="50" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
