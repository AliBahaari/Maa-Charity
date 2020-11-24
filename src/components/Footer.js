import React, { Component } from 'react';

// Components

// Styles
import '../styles/Footer.css';

// Images
import Instagram from '../images/instagram.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="reserved-rights">
          تمامی محتوای سایت محفوظ است و پیگرد قانونی دارد.
        </p>
        <p className="instagram-page">
          ما را در اینستاگرام دنبال کنید :
          <a href="#">
            <img src={ Instagram } alt="Instagram Icon" />
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;