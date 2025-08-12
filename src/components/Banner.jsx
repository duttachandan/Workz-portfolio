import React, { useEffect, useRef, useState } from "react";
import Image from "../assets/img/banner.png";
import Scroll from "../assets/img/scroll-down.png";
import Pdf from "../assets/Chandan.pdf";

import BlurText from "../components/BlurText";

import { IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { BsDownload } from "react-icons/bs";

const Banner = () => {
  let DeveloperName = "Chandan Dutta.";
  const [spaceValue, setSpaceValue] = useState();
  const addText = useRef();

  const AboutMe = `I'm a Frontend Developer with 2.5+ years of experience building modern web apps using React.js, Node.js, MongoDB, and JavaScript. I'm passionate about clean, user-friendly interfaces and love turning Figma designs into responsive code.

Coming from a family of entrepreneurs, I'm always seeking new challenges and learning opportunities. Currently, I'm exploring NestJS and improving my DSA skills. I work as a Technical Analyst at Webskitters Academy, and my long-term goal is to launch a startup that promotes a healthier, more balanced work culture.

Let’s connect!`;

  useEffect(() => {
    const chars = DeveloperName.split("");

    chars.forEach((elem, index) => {
      if (elem === " ") {
        setSpaceValue(index); // Async!
      }
    });
  }, []);

  useEffect(() => {
    if (spaceValue === undefined) return;
    function createAnimatedH1() {
      const chars = DeveloperName.split("");
      addText.current.innerHTML = chars
        .map((char, index) =>
          char === " "
            ? `<br/>`
            : `<span data-aos="fade-up" 
            data-aos-anchor-placement="bottom-bottom" 
            data-aos-delay="${index * 150}" 
            class="${index > spaceValue ? "text-glow" : ""}"
            data-aos-offset="0">${char}</span>`
        )
        .join("");
    }
    createAnimatedH1();
  }, [spaceValue]);

  return (
    <>
      <section className="banner-section">
        <div className="container">
          <div className="banner-wrpr">
            <div className="row banner-row">
              <div className="col-50">
                <div className="banner-cntn">
                  <div className="prefix-name">
                    <span>I</span>
                    <span className="text-glow">'m</span>
                  </div>
                  <h1 className="title1" ref={addText}></h1>
                </div>
                <div data-aos="fade-down" className="cntct-me">
                  FeelFree To Contact Me
                  <div className="title2">chandan.dutta8372@gmail.com</div>
                  <span className="job-desc">MERN</span>
                </div>
              </div>
              <div className="col-50">
                <div data-aos="fade-right" className="banner-img">
                  <img src={Image} alt="Banner Image" />
                  <a href={Pdf} download={Pdf} className="banner-pdf">
                    <span>
                      <BsDownload />
                    </span>
                    Download My Resume
                  </a>
                </div>
              </div>
            </div>
            <div className="curve"></div>
            <div className="auto-scroll">
              {/* 1st Service */}
              <div className="services" style={{ "--i": 1 }}>
                <div className="services-icon">
                  <IoLogoFigma />
                </div>
                <div className="services-name">
                  <p>UI/UX Design</p>
                  <span>Collaborate With Others</span>
                </div>
              </div>

              {/* 2nd Service */}
              <div className="services" style={{ "--i": 2 }}>
                <div className="services-icon">
                  <RiReactjsLine />
                </div>
                <div className="services-name">
                  <p>React Js</p>
                  <span>Collaborate With Others</span>
                </div>
              </div>

              {/* 3rd Service */}
              <div className="services" style={{ "--i": 3 }}>
                <div className="services-icon">
                  <TbBrandReactNative />
                </div>
                <div className="services-name">
                  <p>React Native</p>
                  <span>Collaborate With Others</span>
                </div>
              </div>

              {/* 4th Service */}
              <div className="services" style={{ "--i": 4 }}>
                <div className="services-icon">
                  <SiNextdotjs />
                </div>
                <div className="services-name">
                  <p>Next Js</p>
                  <span>Collaborate With Others</span>
                </div>
              </div>

              {/* 5th services */}
              <div className="services" style={{ "--i": 5 }}>
                <div className="services-icon">
                  <SiMui />
                </div>
                <div className="services-name">
                  <p>Material UI</p>
                  <span>Collaborate With Others</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-icon">
          <img src={Scroll} alt="" />
        </div>
      </section>

      <section id="know-about" className="Knw-abt-me">
        <div data-aos="fade-up" className="knw-me-hdr">
          <h2 className="shadow-text">What I do</h2>
          <span className="knw-me">Know Me</span>
        </div>
        <div className="container">
          <BlurText
            text={AboutMe}
            delay={150}
            animateBy="words"
            direction="top"
            className="mb-8 blur-text"
          />
          <div className="circles">
            <div className="circle-wrpr">
              <div
                data-aos-duration="1500"
                data-aos="fade-right"
                className="circle"
              >
                <h3>95+</h3>
                <span>Project Done</span>
              </div>
              <div
                data-aos-duration="1500"
                data-aos="fade-up"
                className="circle"
              >
                <h3>86%</h3>
                <span>Prototyping</span>
              </div>
              <div
                data-aos-duration="1500"
                data-aos="fade-down"
                className="circle"
              >
                <h3>15k</h3>
                <span>Asisst</span>
              </div>
              <div
                data-aos-duration="1500"
                data-aos="fade-left"
                className="circle"
              >
                <h3>7/8</h3>
                <span>Design Experties</span>
              </div>
            </div>

            <div className="circle-wrpr">
              <div
                data-aos-duration="1500"
                data-aos="fade-down"
                className="circle"
              >
                <h3>15k</h3>
                <span>Asisst</span>
              </div>
              <div
                data-aos-duration="1500"
                data-aos="fade-left"
                className="circle"
              >
                <h3>7/8</h3>
                <span>Design Experties</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
