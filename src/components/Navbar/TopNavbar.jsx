import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from 'react-router-dom'

import logo from "../../images/logo.png";
import Header from "../MainPage/Header/Header";
const TopNavbar = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const style = {
    color: 'white',
    position: 'fixed',
  }

  return (
    <div >
      <nav style={style}>
        <LinkRouter to="/" className="logo" smooth={true} duration={2000}>
          <h1 style={{ color: 'white', cursor: 'pointer' }}>STA Coin</h1>
        </LinkRouter>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <LinkScroll to="main" className="active" smooth={true} duration={1000}>
              Home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="features" smooth={true} duration={1000}>
              Features
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="services" smooth={true} duration={1000}>
              Services
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="subscribe" smooth={true} duration={1000}>
              Subscribe
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="#" smooth={true} duration={1000}>
              Contact US
            </LinkScroll>
          </li>
        </ul>
        {/* <span
          onClick={() => opengithub("https://github.com")}
          className="hey"
        >
          GitHub
        </span> */}
        <span >
          <LinkRouter to="/login">
            <p style={{ color: 'white', fontSize: '0.8rem' }}>Login</p>
          </LinkRouter>
        </span>
      </nav>
    </div>
  );
};

export default TopNavbar;
