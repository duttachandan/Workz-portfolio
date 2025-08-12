import React from "react";
import FooterCSS from "../../styles/footer.module.css";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import useFancybox from "../../components/Fancybox/Fancybox";
import { Link } from "react-router";

const Footer = () => {
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });
  return (
    <>
      <footer className="footer-sec">
        <div
          className={`knw-me-hdr ${FooterCSS.footerTop}`}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="shadow-text">Back To Top</h2>
          <a href="#header" className="knw-me bcktop">
            Back To Top
          </a>
        </div>
        <div className="footer-bottom">
          <div className={`container ${FooterCSS.footerBottom}`}>
            <div className={` ${FooterCSS.bottomwrpr}`}>
              <div className="row">
                <div className="col-40">
                  <div className="links">
                    <div className={`${FooterCSS.footerLinks}`}>
                      <a href="">
                        <span>
                          <FaGithub />
                        </span>
                      </a>
                      <a href="">
                        <span>
                          <BsInstagram />
                        </span>
                      </a>
                      <a href="">
                        <span>
                          <FaLinkedin />
                        </span>
                      </a>
                    </div>
                    <ul className={`${FooterCSS.footerInLinks}`}>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/projects">Projects</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={`col-60 ${FooterCSS.ContactUs} `}>
                  <div className="row">
                    <div className="col-50">
                      <div ref={fancyboxRef}>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Westminster+Bridge%2C+London&query_place_id=ChIJoaH8k8YEdkgRnmDd5iuUl9Y"
                          data-fancybox
                          className={`${FooterCSS.MapDirection}`}
                        >
                          Map Direction
                        </a>
                        <div>I am available Here</div>
                      </div>

                      <div>
                        <a
                          href="tel:8372068294"
                          className={`${FooterCSS.MapDirection}`}
                        >
                          (+91) 8372068294
                        </a>
                        <div>Contact Me At</div>
                      </div>
                    </div>
                    <div className="col-50">
                      <div>
                        <a
                          href="mailto:duttaankit917@gmail.com"
                          className={`${FooterCSS.MapDirection}`}
                        >
                          Duttaankit917@gmail.com
                        </a>
                        <div>Email Me Through</div>
                      </div>
                      <div>
                        <div className={`${FooterCSS.MapDirection}`}>
                          09.30 AM - 8.30 PM
                        </div>
                        <div>My Available Timing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${FooterCSS.copyright}`}>
              Copyright © 2025 {" "}
              <Link to="/"> CD Workz</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
