import React, { Fragment } from "react";
import "./About.moudule.css";

const About = () => {
  return (
    <Fragment>
      <div className="heading">
        <h3>
          <strong>About Us</strong>
        </h3>
        <p>Home / About Us</p>
      </div>
      <div className="about">
        <div className="our-company item">
          <h2>Our company</h2>
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              natus!
            </strong>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            ex omnis praesentium ratione. Quam, ab?
          </p>
        </div>
        <div className="our-team item">
          <h2>Our team</h2>
          <img src="" alt="Image" />
          <p>
            <strong>Nhóm 4 người</strong>
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            facere accusamus alias expedita debitis ipsum!
          </p>
        </div>
        <div className="testimonials item">
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            corrupti!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati,
            corrupti!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
