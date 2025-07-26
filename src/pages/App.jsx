import React from "react";
import Banner from "../components/Banner";
import Myprojects from "../components/Myprojects";
import MagicBento from "../components/MagicBento/MagicBento"

const App = () => {
  return (
    <>
      <Banner />
      <Myprojects />
      <section className="magic-bento-sec">
        <div className="container">
          <MagicBento />
        </div>
      </section>
    </>
  );
};

export default App;
