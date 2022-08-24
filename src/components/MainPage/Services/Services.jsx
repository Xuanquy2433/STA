import React from "react";
import Box from "./Box";
import image1 from "../../../images/s1.png"
import image2 from "../../../images/s2.png"
import { Link as Link } from 'react-router-dom'

const Services = () => {
  return (

    <div id="services">
      <div className="s-heading">
        <h1>Services</h1>
        <p>Here are some services I Provide</p>
      </div>
      <div className="b-container">
        <Link to="/basic">
          <Box image={image1} alt="image1" button="10 STA" />
        </Link>
        <Link to="/gold">
          <Box image={image1} alt="image2" button="100 STA" />
        </Link>
        <Link to="/premium">
          <Box image={image1} alt="image1" button="1000 STA" />
        </Link>
      </div>
    </div>
  );
};

export default Services;
