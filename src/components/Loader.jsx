import React from "react";
import LoaderCss from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={LoaderCss.loader}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Loader;
