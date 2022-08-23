import React from "react";
import { Link } from "react-scroll";
import './Header.css'
import TopNavbar from "../../Navbar/TopNavbar";
const Header = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div id="main">
      <div className="name">
        {/* <h1>
          It's a <span>ReactJS</span> website
        </h1> */}
        <h1 >
          <span className="textSTA">STA</span> <h1 className="textIsSTA" style={{display:"inline"}}>is an innovative payment network and a new kind of money.</h1>
        </h1>
        <p className="details">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="header-btns">
          <Link className="cv-btn">Hire Me</Link>
          <span
            onClick={() => opengithub("https://github.com")}
            className="cv-btn1"
          >
            GitHub
          </span>
        </div>
      </div>
      <div className="arrow"></div>
    </div>
  );
};

export default Header;
