import React from "react";
import ProjectC from "../styles/ProjectC.module.css";
import { Link } from "react-router";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Projects = () => {
  return (
    <section className={`${ProjectC.projectSec}`}>
      <div className="contianer">
        {/* Project top */}
        <div className={`${ProjectC.projectHdr}`}>
          <Link to="/">Home</Link>
          <MdOutlineArrowRightAlt />
          <div className={`${ProjectC.pageName}`}>Projects</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
