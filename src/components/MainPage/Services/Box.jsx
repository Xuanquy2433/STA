import React from "react";
import { Link } from "react-scroll";

const Box = (props) => {

  const { price, name, imageURL, description, percentage, investMonth, onclick } = props


  console.log("imageeeeeeeeeeeeeeeeeeee ", imageURL);
  return (
    <div className="s-box">
      <div className="s-b-img">
        <img src={imageURL} alt={props.alt} />
      </div>
      <h2 style={{ textAlign: 'center' }}>{name}</h2>
      <div className="s-b-text">

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i> Percentage {percentage}
        </p>

        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i> InvestMonth  {investMonth}
        </p>
        <p style={{ marginTop: '0' }} className="details">
          <i class="fa-solid fa-check"></i>  {description}
        </p>

        <button onClick={onclick} style={{ color: 'white' }} className="cv-btn btnHover">
          {investMonth} STA
        </button>
      </div>
    </div>
  );
};

export default Box;
