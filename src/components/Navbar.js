import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Components

// Styles
import '../styles/Navbar.css';

// Images
import MaaCharityLogo from '../images/maa-charity-logo.svg';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="logo-anchor" to="/">
          <img src={ MaaCharityLogo } alt="Maa Charity Logo" />
        </Link>
        
        <ul>
          <li><NavLink exact to="/">خیریه «ما» چیست؟</NavLink></li>
          <li><NavLink to="/Goals">اهداف ما چیستند؟</NavLink></li>
          <li><NavLink to="/Help">چطور می توانم کمک کنم؟</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;