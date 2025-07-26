import React from "react";
import Logo from "../../assets/img/Logo.png";

const Header = () => {
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
            <ul>
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
            <div className="nav-btn">
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
          </div>
          <button className="navbar-toggler">
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
