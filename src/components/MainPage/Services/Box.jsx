import React from "react";
import { Link } from "react-scroll";

const Box = (props) => {
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={props.image} alt={props.alt} />
      </div>
      <div className="s-b-text">
        
        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  Lorem ipsum dolor sit amet.
        </p>

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  It is a long established fact
        </p>
        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  It is a long established fact
        </p>

        <Link  style={{color: 'white'}}to="#" className="cv-btn btnHover">
          {props.button}
        </Link>
      </div>
    </div>
  );
};

export default Box;
