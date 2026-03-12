import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BeaconOne from '../assets/projects/Hero2.png'
import LuxeShop from "../assets/projects/LuxeShop.png"
import Eterna from "../assets/projects/Eterna.png"
import Nestra from "../assets/projects/Nestra.png"
import RedRiders from "../assets/projects/RedRiders.png"
import Cara from "../assets/projects/Cara.png"

const Myprojects = () => {
  var settings = {
    dots: true,
    arrows: false,
    speed: 800,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="myProject-sec">
      <div className="knw-me-hdr" data-aos="fade-up" data-aos-delay="200">
        <h2 className="shadow-text">Projects</h2>
        <span className="knw-me">My Projects</span>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <a target="_blank" href="https://www.beacononecapital.com/" className="project-card">
              <div className="project-card-img">
                <img src={BeaconOne} alt="" />
                <span role="button" className="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="25"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="project-card-desc">
                <h3>Beacon One Capital Live Project</h3>
                <p>
                  Beacon One Capital is a financial services website showcasing investment solutions, capital advisory, and strategic funding opportunities through a clean, professional interface.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://redriderssports.com/" className="project-card">
              <div className="project-card-img">
                <img src={RedRiders} alt="" />
                <span role="button" className="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="25"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="project-card-desc">
                <h3>Red Riders Sport Live Project</h3>
                <p>
                  An engaging sports and adventure themed website interface built with structured navigation, action-driven sections, and strong visual hierarchy to enhance user interaction.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://duttachandan.github.io/EcommerceUsingContext/" className="project-card">
              <div className="project-card-img">
                <img src={Cara} alt="" />
                <span className="button" role="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="25"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="project-card-desc">
                <h3>Cara</h3>
                <p>
                  A modern e-commerce web application built using React Context API for efficient global state management, featuring dynamic product listings, cart functionality, and a responsive user interface.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://developerr0nit.github.io/NESTRA/" className="project-card">
              <div className="project-card-img">
                <img src={Nestra} alt="" />
                <span className="button" role="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="25"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="project-card-desc">
                <h3>NESTRA</h3>
                <p>
                  This project showcases a sleek and responsive website interface built with modern design principles, highlighting smooth navigation, visually appealing sections, and optimized user experience.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://ni-sha-nt.github.io/Eterna/" className="project-card">
              <div className="project-card-img">
                <img src={Eterna} alt="" />
                <span className="button" role="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="25"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="project-card-desc">
                <h3>Eterna</h3>
                <p>
                  Eterna is a modern and elegant website interface designed with a clean layout, smooth visual hierarchy, and responsive design principles to create a premium user experience.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://sdey1122.github.io/LuxeShop-SD/" className="project-card">
              <div className="project-card-img">
                <img src={LuxeShop} alt="" />
                <span className="button" role="button">
                  <span className="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg"
                      width="25"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>

                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      width="25"
                      xmlns="http://www.w3.org/2000/svg"
                      className="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </span>
              </div>
              <div className="project-card-desc">
                <h3>LuxeShop</h3>
                <p>
                  LuxeShop is a clean and visually appealing online jewelry store UI
                  that highlights premium product collections with responsive Bootstrap
                  components and modern design aesthetics.
                </p>
              </div>
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Myprojects;
