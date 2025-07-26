import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/img/image1.png";
import Image2 from "../assets/img/image.png";
import Image3 from "../assets/img/image3.png";
import Image4 from "../assets/img/image4.png";
import Image6 from "../assets/img/image5.png";
import Image5 from "../assets/img/image6.png";

const Myprojects = () => {
  var settings = {
    dots: true,
    arrows: false,
    speed: 800,
    centerMode: true,
    slidesToShow: 2,
    slidesToScroll: 2,
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
      <div className="knw-me-hdr">
        <h2 className="shadow-text">Projects</h2>
        <span className="knw-me">My Projects</span>
      </div>
      <div className="container">
        <Slider {...settings}>
          <div>
            <a href="" className="project-card">
              <div className="project-card-img">
                <img src={Image6} alt="" />
                <a className="button" href="">
                  <span class="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="button__icon-svg"
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
                      class="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="project-card-desc">
                <h3>EE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam blanditiis delectus tempora beatae voluptate quam
                  corrupti repellat, maiores officia eveniet.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="project-card">
              <div className="project-card-img">
                <img src={Image1} alt="" />
                <a className="button" href="">
                  <span class="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="button__icon-svg"
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
                      class="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="project-card-desc">
                <h3>EE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam blanditiis delectus tempora beatae voluptate quam
                  corrupti repellat, maiores officia eveniet.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="project-card">
              <div className="project-card-img">
                <img src={Image2} alt="" />
                <a className="button" href="">
                  <span class="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="button__icon-svg"
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
                      class="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="project-card-desc">
                <h3>EE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam blanditiis delectus tempora beatae voluptate quam
                  corrupti repellat, maiores officia eveniet.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="project-card">
              <div className="project-card-img">
                <img src={Image3} alt="" />
                <a className="button" href="">
                  <span class="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="button__icon-svg"
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
                      class="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="project-card-desc">
                <h3>EE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam blanditiis delectus tempora beatae voluptate quam
                  corrupti repellat, maiores officia eveniet.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="project-card">
              <div className="project-card-img">
                <img src={Image4} alt="" />
                <a className="button" href="">
                  <span class="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="button__icon-svg"
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
                      class="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="project-card-desc">
                <h3>EE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam blanditiis delectus tempora beatae voluptate quam
                  corrupti repellat, maiores officia eveniet.
                </p>
              </div>
            </a>
          </div>
          <div>
            <a href="" className="project-card">
              <div className="project-card-img">
                <img src={Image5} alt="" />
                <a className="button" href="">
                  <span class="button__icon-wrapper">
                    <svg
                      viewBox="0 0 14 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="button__icon-svg"
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
                      class="button__icon-svg button__icon-svg--copy"
                    >
                      <path
                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </a>
              </div>
              <div className="project-card-desc">
                <h3>EE</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam blanditiis delectus tempora beatae voluptate quam
                  corrupti repellat, maiores officia eveniet.
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
