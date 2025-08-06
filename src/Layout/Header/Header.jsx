import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/img/Logo.png";

// FA icons

import { RiLinkedinLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState();
  const navBtnRef = useRef();

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
      document.documentElement.style.overflow = "hidden"; // <-- add this
    } else {
      document.body.style.overflow = ""; // Restore default scroll
      document.documentElement.style.overflow = ""; // <-- add this
    }

    // Optional cleanup in case component unmounts while menu is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavOpen]);

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
                <a className="nav-links" href="#know-about">
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
              <a
                className="social-md-icon"
                target="_blank"
                href="https://www.linkedin.com/in/chandan-dutta-b2a778170/"
              >
                Linkedin
              </a>
              <a
                className="social-md-icon"
                target="_blank"
                href="https://github.com/duttachandan"
              >
                Github
              </a>
              <a
                className="social-md-icon"
                target="_blank"
                href="https://www.instagram.com/I_m_chandan_dutta"
              >
                Instagram
              </a>
            </div>
            <div className="sm-nav-btn" ref={navBtnRef}>
              <a
                className="social-md-icon"
                target="_blank"
                href="https://www.linkedin.com/in/chandan-dutta-b2a778170/"
              >
                <RiLinkedinLine />
              </a>
              <a
                className="social-md-icon"
                target="_blank"
                href="https://github.com/duttachandan"
              >
                <PiGithubLogoFill />
              </a>
              <a
                className="social-md-icon"
                target="_blank"
                href="https://www.instagram.com/I_m_chandan_dutta"
              >
                <SiInstagram />
              </a>
            </div>
          </div>

          <button
            className={`navbar-toggler ${isNavOpen ? "open" : ""}`}
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
