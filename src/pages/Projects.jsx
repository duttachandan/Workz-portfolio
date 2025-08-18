import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectC from "../styles/ProjectC.module.css";
import { Link } from "react-router";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { projectList } from "../assets/projects/projects";

const Projects = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    // Initialize Isotope
    isotope.current = new Isotope(".projects-grid", {
      itemSelector: ".project-item",
      layoutMode: "fitRows",
    });

    return () => isotope.current?.destroy();
  }, []);

  useEffect(() => {
    if (filterKey === "*") {
      isotope.current.arrange({ filter: "*" });
    } else {
      isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  return (
    <section className={ProjectC.projectSec}>
      <div className="container">
        {/* Project top */}
        <div className={ProjectC.projectHdr}>
          <Link to="/">Home</Link>
          <MdOutlineArrowRightAlt />
          <div className={ProjectC.pageName}>Projects</div>
        </div>

        {/* Project Categories */}
        <div className={ProjectC.projectCategories}>
          <div
            onClick={() => setFilterKey("*")}
            className={ProjectC.projectStack}
          >
            All
          </div>
          {projectList.map((stack, index) => (
            <div
              key={index}
              onClick={() => setFilterKey(stack.projectStack)}
              className={ProjectC.projectStack}
            >
              {stack.projectStack}
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectList.map((stack) =>
            stack.projectList.map((project, index) => (
              <div
                key={index}
                className={`project-item col-3 ${stack.projectStack}`}
              >
                <div className={`${ProjectC.projectItem}`}>
                  <div className={ProjectC.projectCard}>
                    <div className={ProjectC.CardImage}>
                      <img
                        src={project.projectImage}
                        alt={project.projectName}
                      />
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noreferrer"
                        className="button"
                      >
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
                      </a>
                    </div>
                    <h3>{project.projectName}</h3>
                    <p>{project.projectDesc}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
