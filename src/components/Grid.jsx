import React, { useState, useRef, useEffect } from "react";
import GridCss from "../styles/GridCss.module.css";
import Figma from "../assets/icons/figma.png";
import Jquery from "../assets/icons/Jquery.png";
import Node from "../assets/icons/node.png";
import ReactJs from "../assets/icons/React-icon.svg.png";
import Next from "../assets/icons/nextjs.png";
import MongoDB from "../assets/icons/mongo.png";
import Javascript from "../assets/icons/javascript.webp";
import Next2 from "../assets/icons/Next2.png"
import Counter from "../components/Counter/Counter";

// Add icons for each skill as needed
const skillIcons = {
  Figma,
  Node, // Replace with actual JS icon
  ReactJs,
  Next,
  MongoDB,
};

const skillValues = {
  ReactJs: 90,
  figma: 80,
  Node: 85,
  MongoDB: 50,
  Next: 90,
};

const Grid = () => {
  const [data, setData] = useState(
    Object.fromEntries(Object.keys(skillValues).map((k) => [k, 0]))
  );
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setData(skillValues);
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <>
      <section ref={sectionRef} className={`${GridCss.knwMeHdrsec}`}>
        <div className="container">
          <div className={`row ${GridCss.knwMeHdrRow}`}>
            <div className="col-50">
              <div
                data-aos="fade-up"
                className={`knw-me-hdr ${GridCss.knwMeSkill}`}
              >
                <span className={`knw-me ${GridCss.worksIdohdr}`}>
                  Works I Do
                </span>
                <h2 className={`${GridCss.worksIdohdr} title2 `}>
                  Innovative Display
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Omnis odit totam quisquam reiciendis blanditiis expedita
                  similique excepturi et ea placeat.
                </p>
                <div
                  data-aos="fade-up"
                  className={`${GridCss.worksidoProgBar}`}
                >
                  {Object.keys(skillValues).map((skill) => (
                    <div key={skill} className={`${GridCss.skillCard}`}>
                      <div className={`${GridCss.skillIcon}`}>
                        <img src={skillIcons[skill] || Figma} alt={skill} />
                      </div>
                      <div className={`${GridCss.skillDesc}`}>
                        <div className={`${GridCss.skills}`}>
                          <span>{skill}</span>
                          <div>
                            <Counter
                              value={data[skill]}
                              places={[100, 10, 1]}
                              fontSize={30}
                              padding={5}
                              gap={10}
                              textColor="white"
                              fontWeight={900}
                            />
                          </div>
                        </div>
                        <div className={`${GridCss.progressbar}`}>
                          <div
                            style={{
                              "--width": `${data[skill]}%`,
                            }}
                            className={`${GridCss.percent}`}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-50">
              <div className={`${GridCss.totalExperience}`}>
                <span className={`${GridCss.totalExptitle}`}>
                  2.3 Years Of Experience
                </span>
                <div className={`${GridCss.company}`}>
                  <div className={`${GridCss.companyDetails} row`}>
                    <div className={`${GridCss.companyName}`}>
                      GamingPrism Pvt Ltd
                    </div>
                    <div className={`${GridCss.designation}`}>
                      <span>Frontend Developer</span>
                      <br />
                      <span className={`${GridCss.yearSpend}`}>
                        2022 - 2024
                      </span>
                    </div>
                  </div>
                  <div className={`${GridCss.companyDetails} row`}>
                    <div className={`${GridCss.companyName}`}>
                      Webskitters Academy
                    </div>
                    <div className={`${GridCss.designation}`}>
                      <span>Technical Analyst</span>
                      <br />
                      <span className={`${GridCss.yearSpend}`}>
                        2022 - Present
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${GridCss.totalSkills}`}>
                <div className={`${GridCss.coverSkills}`}>
                  <div
                    style={{ "--i": "1" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={Figma} alt="" />
                  </div>
                  <div
                    style={{ "--i": "2" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={Javascript} alt="" />
                  </div>
                  <div
                    style={{ "--i": "3" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={ReactJs} alt="" />
                  </div>
                  <div
                    style={{ "--i": "4" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={Jquery} alt="" />
                  </div>
                  <div
                    style={{ "--i": "5" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={Node} alt="" />
                  </div>
                  <div
                    style={{ "--i": "6" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={MongoDB} alt="" />
                  </div>
                  <div
                    style={{ "--i": "7" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={Next2} alt="" />
                  </div>
                  <div
                    style={{ "--i": "8" }}
                    className={`${GridCss.skillImage}`}
                  >
                    <img src={Figma} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Grid;
