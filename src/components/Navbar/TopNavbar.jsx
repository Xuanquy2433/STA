import React from "react";
// import { Link } from "react-scroll";
import { Link } from 'react-router-dom'

import logo from "../../images/logo.png";
import Header from "../MainPage/Header/Header";
const TopNavbar = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <nav style={{ color: 'white'}}>
        <Link to="/" className="logo" smooth={true} duration={2000}>
          <h1 style={{ color: 'white', cursor: 'pointer' }}>STA Coin</h1>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/" className="active" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="features" smooth={true} duration={1000}>
              Features
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={1000}>
              Services
            </Link>
          </li>
          <li>
            <Link to="subscribe" smooth={true} duration={1000}>
              Subscribe
            </Link>
          </li>
          <li>
            <Link to="#" smooth={true} duration={1000}>
              Contact US
            </Link>
          </li>
        </ul>
        {/* <span
          onClick={() => opengithub("https://github.com")}
          className="hey"
        >
          GitHub
        </span> */}
        <span >
          <Link to="/login">
          <p style={{color: 'white',fontSize: '0.8rem'}}>Login</p>
          </Link>
        </span>
      </nav>
    </div>
  );
};

export default TopNavbar;
