import React from 'react';
import {footer_left_title, footer_right_title} from "../../translations/Footer/ru";
import './Footer.scss';

const Footer = () => {

  return (
    <div className="footerContainer">
      <div className="left">{footer_left_title}</div>
      <div className="right">{footer_right_title}</div>
    </div>
  )
};

export default Footer;