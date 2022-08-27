import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';

const TopNavbar = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  let showName

  if (localStorage.getItem("user")) {
    let dataUser = localStorage.getItem("user");
    let firstName = JSON.parse(dataUser).userDataDto.firstName
    let lastName = JSON.parse(dataUser).userDataDto.lastName
    showName = firstName + " " + lastName
  }


  const style = {
    zIndex: '3',
    color: 'white',
    position: 'fixed',
  }

  return (
    <div >
      <nav style={style}>
        <LinkRouter to="/" className="logo" smooth='true' duration={2000}>
          <h1 style={{ color: 'white', cursor: 'pointer', fontSize: '2.0em', marginTop: '5px' }}>STA <span style={{ color: '#DAA520' }} >Coin</span></h1>
        </LinkRouter>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul style={{ marginTop: '5px', marginBottom: '5px' }} className="menu">
          <li >
            <LinkScroll to="main" className="active" smooth='true' duration={100}>
              Home
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="features" smooth='true' duration={100}>
              Features
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="services" smooth='true' duration={100}>
              Services
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="about" smooth='true' duration={100}>
              About US
            </LinkScroll>
          </li>
          <li>
            <LinkScroll to="subscribe" smooth='true' duration={100}>
              Subscribe
            </LinkScroll>
          </li>

        </ul>
        {/* <span
          onClick={() => opengithub("https://github.com")}
          className="hey"
        >
          GitHub
        </span> */}
        {showName ? <span style={{ marginTop: '13px' }} >
          <LinkRouter to='/profile' >  <h5 style={{ color: 'white', fontSize: '0.8rem' }}>Hi, {showName} <PersonIcon style={{ paddingBottom: "3px" }} /> </h5> </LinkRouter>
        </span> : <LinkRouter to="/login">
          <h5 style={{ color: 'white', fontSize: '0.8rem' }}>Login</h5>
        </LinkRouter>}
      </nav>
    </div>
  );
};

export default TopNavbar;
