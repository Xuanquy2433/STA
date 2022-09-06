import React, { useEffect, useState } from 'react'
import { Link as LinkScroll } from "react-scroll";
import { Link as LinkRouter } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { API_GET_WALLET } from '../utils/const';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './TopNav.css'

const TopNavbar = () => {
  const opengithub = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  let showName
  let token = localStorage.getItem("token");
  let user = localStorage.getItem("user");
  const [sta, setSta] = useState('');
  const [money, setMoney] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (localStorage.getItem("user")) {
    let dataUser = localStorage.getItem("user");
    let firstName = JSON.parse(dataUser).userDataDto.firstName
    let lastName = JSON.parse(dataUser).userDataDto.lastName
    showName = firstName + " " + lastName
  }

  const getUserSta = async () => {
    console.log(token);
    const response = await axios.post(API_GET_WALLET + token);
    console.log("sta ", response.data);
    if (response && response.status === 200) {
      setSta(response.data.sta);
      setMoney(response.data.money)
    }
  }

  const style = {
    zIndex: '3',
    color: 'white',
    position: 'fixed',
  }


  useEffect(() => {
    getUserSta();
  }, []);

  return (
    <div >
      <nav style={style}>
        <LinkRouter to="/" className="logo" smooth='true' duration={2000}>
          <div className='logoSTA'>
            <h1 style={{ color: 'white', cursor: 'pointer', fontSize: '2.0em', marginTop: '5px' }}>STA <span style={{ color: '#DAA520' }} >Coin</span></h1>
          </div>
        </LinkRouter>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul style={{ marginTop: '5px', marginBottom: '5px' }} className="menu">
          <li >
            <LinkRouter to="/" className="active" smooth='true' duration={100}>
              Home
            </LinkRouter>
          </li>
          {/* <li>
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
            <LinkScroll to="chart" smooth='true' duration={100}>
              Chart
            </LinkScroll>
          </li> */}
          {user && token ? <li>
            <LinkRouter to="/market" >
              Market
            </LinkRouter>
          </li> : ''}

        </ul>
        {/* <span
          onClick={() => opengithub("https://github.com")}
          className="hey"
        >
          GitHub
        </span> */}
        {showName ? <span style={{ marginTop: '13px' }} >
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            style={{ color: 'white' }}
          >
            <PersonIcon style={{ paddingBottom: "3px" }} />  {showName} <ArrowDropDownIcon />
          </Button>
        </span> : <LinkRouter to="/login">
          <h5 style={{ color: 'white', fontSize: '0.8rem' }}>Login</h5>
        </LinkRouter>}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          
        >
          <MenuItem onClick={handleClose} style={{width: '250px'}}>
            <LinkRouter to={'/profile'}>
              <div className='navAvt' >
                <img src="https://crypto.com/nft/assets/images/profile/default-profile.jpg?d=lg-logo" className='avt' alt="" />
              </div>
              <div className='navName'>
                <p className='pTop'>{showName}</p>
                <p className='pBottom'>  My Profile</p>
              </div>
            </LinkRouter>
          </MenuItem>
          <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
          <MenuItem onClick={handleClose}>Account Activity</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </nav>
    </div>
  );
};

export default TopNavbar;
