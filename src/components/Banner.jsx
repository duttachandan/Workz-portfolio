import React, { useEffect, useRef, useState } from "react";

const Banner = () => {
  let DeveloperName = "Chandan Dutta";
  const [spaceValue, setSpaceValue] = useState();
  const addText = useRef();

  useEffect(() => {
    const chars = DeveloperName.split("");

    chars.forEach((elem, index) => {
      if (elem === " ") {
        setSpaceValue(index); // Async!
      }
    });
  }, []);

  console.log(spaceValue);

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
    <section className="banner-section">
      <div className="container">
        <div className="banner-wrpr">
          <div className="row">
            <div className="col-50">
              <div className="banner-cntn">
                <div className="prefix-name">
                  <span>I</span>
                  <span className="text-glow">'m</span>
                </div>
                <h1 className="title1" ref={addText}></h1>
              </div>
            </div>
            <div className="col-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
