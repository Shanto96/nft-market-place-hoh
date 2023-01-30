import React from "react";
import "./footer.css";
import Logo from "../../img/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import BlueStar from "../BlueStar/BlueStar";
function Footer() {
  return (
    <div className="footer-container relative">
      <div className="absolute glass ab-glass"></div>
      <BlueStar />

      <BlueStar />
      <BlueStar />
      <div className="blur"></div>

      <div className="footer d-flex relative">
        <div className="logo-container">
          <img src={Logo} alt="" className="f-logo" />
          <span className="footer-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
            magni officia eveniet tempora, modi quidem nostrum in quaerat? Atque
            beatae
          </span>
          <div className="icons-container">
            <FaFacebookF />
            <BsTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="sitemap footer-column">
          <div className="footer-heading">Site Map</div>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>NFT</li>
            <li>Roadmap</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="company footer-column">
          <span className="footer-heading">Company</span>
          <ul>
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="resource footer-column">
          <span className="footer-heading">Resource</span>
          <ul>
            <li>Partner</li>
            <li>Blog</li>
            <li>Newsletter </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
