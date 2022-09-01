import React from "react";
import { Link } from "react-scroll";

const Box = (props) => {

  const { price, name, imageURL, description } = props
  console.log("imageeeeeeeeeeeeeeeeeeee ", imageURL);
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={imageURL} alt={props.alt} />
      </div>
      <h2 style={{ textAlign: 'center' }}>{name}</h2>
      <div className="s-b-text">

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {description}
        </p>

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {description}
        </p>
        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {description}
        </p>
        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {description}
        </p>
        <Link style={{ color: 'white' }} to="#" className="cv-btn btnHover">
          {price} STA
        </Link>
      </div>
    </div>
  );
};

export default Box;
