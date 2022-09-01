import React from "react";
import featureImg from "../../../images/Frame 19.png";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <>

      <div className="f-heading">
        <h1>Features</h1>
        <p>Here are some features of Software</p>
      </div>
      <div id="features">
        <div className="features-model">
          <img src={featureImg} alt="" />
        </div>
        <div className="features-text">
          <h2>Features</h2>
          <h3>
            This Application <span>Software</span> is an Art
          </h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
          <Link to="/market" style={{ fontSize: '0.8em',height: '6vh',backgroundColor: 'white',padding: '10px' }}>View More Features</Link>
        </div>
      </div>
    </>
  );
};

export default Features;
