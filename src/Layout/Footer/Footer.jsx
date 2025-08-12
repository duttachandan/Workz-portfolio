import React from "react";
import FooterCSS from "../../styles/footer.module.css";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import useFancybox from "../../components/Fancybox/Fancybox"


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
                <div className="col-50">
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
                      <li><a href="">Home</a></li>
                      <li><a href="">About</a></li>
                      <li><a href="">Projects</a></li>
                      <li><a href="">Journal</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-50">
                  <div ref={fancyboxRef}>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Westminster+Bridge%2C+London&query_place_id=ChIJoaH8k8YEdkgRnmDd5iuUl9Y"
                      data-fancybox
                    >
                      Launch Map
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
