import React from "react";
import error from "../assets/lottie/404 error.json";
import Lottie from "lottie-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "black",
        textAlign: "center",
      }}
    >
      <Link to="/">
        <Lottie
          animationData={error}
          loop
          style={{
            height: "100vh",
            minWidth: "100vw",
            margin: "0 auto",
          }}
        />
      </Link>
    </div>
  );
};

export default NotFound;
