import React from "react";
import { Link } from "react-scroll";
import emojiLogo from "../../img/heartemoji.png";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">
          <Link to="/">
            <img
              style={{ width: "70px", cursor: "pointer" }}
              src={emojiLogo}
              alt=""
            />
          </Link>
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Serivces
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Protfolio
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Testimonial
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="contact-btn n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
