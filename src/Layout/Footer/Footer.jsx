import React from "react";
import FooterCSS from "../../styles/footer.module.css";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
                  <div className={`${FooterCSS.footerInLinks}`}>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                  </div>
                </div>
              </div>
              <div className="col-50"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
