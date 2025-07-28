import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/img/Logo.png";

// FA icons

import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, setIsOpen] = useState();
  const navBtnRef = useRef();

  function handleNavToggle() {
    setIsNavOpen((prev) => !prev);
  }

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="1500"
      className="header-section"
      id="header"
    >
      <div className="container">
        <nav>
          <a href="/" className="nav-logo">
            <img src={Logo} alt="logo of workz" />
          </a>

          <div className="navbar-collapsed">
            <ul className={`${isNavOpen ? "nav-active" : ""}`}>
              <li className="close-nav" onClick={handleNavToggle}>
                <RxCross1 />
              </li>
              <li>
                <a className="nav-links active" href="">
                  Home +
                </a>
              </li>
              <li>
                <a className="nav-links" href="">
                  Projects +
                </a>
              </li>
              <li>
                <a className="nav-links" href="">
                  About +
                </a>
              </li>
              <li>
                <a className="nav-links" href="">
                  Contact Us +
                </a>
              </li>
            </ul>
            <div className="nav-btn" ref={navBtnRef}>
              <a className="social-md-icon" href="">
                Linkedin
              </a>
              <a className="social-md-icon" href="">
                Github
              </a>
              <a className="social-md-icon" href="">
                Instagram
              </a>
            </div>
            <div className="sm-nav-btn" ref={navBtnRef}>
              <a className="social-md-icon" href="">
                <FaLinkedin />
              </a>
              <a className="social-md-icon" href="">
                <FaGithub />
              </a>
              <a className="social-md-icon" href="">
                <FaSquareInstagram />
              </a>
            </div>
          </div>

          <button
            className={`navbar-toggler ${isOpen ? "open" : ""}`}
            onClick={handleNavToggle}
          >
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
