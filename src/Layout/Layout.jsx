import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router";
import Header from "../Layout/Header/Header";
import Footer from "../Layout/Footer/Footer";
import Noise from "../Noise/Noise";

export default function Layout() {
  const cursor = useRef(null);

  let pos = { x: 0, y: 0 };
  let cursorPos = { x: 0, y: 0 };
  const easting = 8;

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    });

    function loop() {
      cursorPos.x += (pos.x - cursorPos.x) / easting;
      cursorPos.y += (pos.y - cursorPos.y) / easting;
      cursor.current.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
  });

  return (
    <>
      <Header />
      <Noise />
      <div className="overline">
        <div className="overlay-line"></div>
        <div className="overlay-line second"></div>
        <div className="overlay-line third"></div>
      </div>
      <div className="cursor" ref={cursor}></div>
      <main className="body">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
