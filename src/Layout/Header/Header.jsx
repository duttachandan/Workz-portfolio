import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/img/Logo.png";

// FA icons

import { RiLinkedinLine } from "react-icons/ri";
// import { SiInstagram } from "react-icons/si";
import { PiGithubLogoFill } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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

  function handleNavLinks() {
    if (isNavOpen === true) {
      setIsNavOpen((prev) => !prev);
    }
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
          <NavLink to="/" className="nav-logo">
            <img src={Logo} alt="logo of workz" />
          </NavLink>

          <div className="navbar-collapsed">
            <ul className={`${isNavOpen ? "nav-active" : ""}`}>
              <li className="close-nav" onClick={handleNavToggle}>
                <RxCross1 />
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className={`nav-links ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                  to="/"
                >
                  Home +
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className={`nav-links ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                  to="/projects"
                >
                  Projects +
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className={`nav-links ${({ isActive }) =>
                    isActive ? "active" : ""}`}
                  to="about"
                >
                  About +
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={handleNavLinks}
                  className={`nav-links ${({ isActive }) =>
                    isActive ? "active" : ""}
                  }`}
                  to="contact"
                >
                  Contact Us +
                </NavLink>
              </li>
            </ul>
            <div className="nav-btn" ref={navBtnRef}>
              <a
                onClick={handleNavLinks}
                className="social-md-icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/chandan-dutta-b2a778170/"
              >
                Linkedin
              </a>
              <a
                onClick={handleNavLinks}
                className="social-md-icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/duttachandan"
              >
                Github
              </a>
              <a
                onClick={handleNavLinks}
                className="social-md-icon"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/I_m_chandan_dutta"
              >
                Instagram
              </a>
            </div>
            <div className="sm-nav-btn" ref={navBtnRef}>
              <a
                onClick={handleNavLinks}
                className="social-md-icon"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/chandan-dutta-b2a778170/"
              >
                <RiLinkedinLine />
              </a>
              <a
                onClick={handleNavLinks}
                className="social-md-icon"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/duttachandan"
              >
                <PiGithubLogoFill />
              </a>
              <a
                onClick={handleNavLinks}
                className="social-md-icon"
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.instagram.com/I_m_chandan_dutta"
              >
                <BsInstagram />
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
