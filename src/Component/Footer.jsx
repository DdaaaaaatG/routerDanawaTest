import React from 'react'
import { styled } from 'styled-components'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const FooterWrap = styled.footer`
  color: #5a5656; margin-top: 2rem; padding-top:2rem ; border-top: 0.5px solid #ddd;
  text-decoration: none;color: #5a5656;
  &>.top{
    display: flex; 
    justify-content: space-between;
    &>div{
      display: flex; 
      justify-content: space-between; 
      width: 30%;
      border-bottom: 0.5px solid #ddd;
      padding-bottom: 2rem;}
    &>nav{
      width: 60%;
      &>a{padding: 0 2rem;}
    }
  }
  &>.bottom{
    display: flex;justify-content: space-between; padding: 2rem;
    &>div{display: flex; justify-content: space-between; cursor: pointer;}
    &>.icon{
      display: flex;  gap:30px
    }
  }

`;

function Footer() {
  return (
    <FooterWrap>
      <div className="top">
        <nav>
          <Link to="">CONTACT</Link>
          <Link to="">SHIPPING AND RETURNS</Link>
          <Link to="">Give an email, get the newsletter.</Link>
        </nav>
      </div>
      <div className="bottom">
        <p>© 2021 Shelly. Terms of use and privacy policy.</p>
        <div className="icon">
          <Link><FontAwesomeIcon icon={faTwitter}/></Link>
          <Link><FontAwesomeIcon icon={faInstagram}/></Link>
          <Link><FontAwesomeIcon icon={faFacebook}/></Link>
          <Link><FontAwesomeIcon icon={faLinkedinIn}/></Link>
        </div>
      </div>
    </FooterWrap>
  )
}

export default Footer