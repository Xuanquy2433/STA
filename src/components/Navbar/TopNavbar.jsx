import React from "react";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";
import TestFormLogin from "../Test/TestFormLogin";
const TopNavbar = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <nav style={{ color: 'white' }}>
        <Link to="main" className="logo" smooth={true} duration={2000}>
          <h3 style={{ color: 'white', cursor: 'pointer' }}>STA Coin</h3>
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main" className="active" smooth={true} duration={1000}>
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
        <span className="hey" data-toggle="modal" data-target="#exampleModal" >Login</span>
        {/* 
        <div class="modal fade" style={{ zIndex: 120, clear: 'both' }} id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <TestFormLogin />
        </div> */}
      </nav>
    </div>
  );
};

export default TopNavbar;
