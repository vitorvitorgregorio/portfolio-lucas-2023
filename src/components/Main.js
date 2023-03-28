import "../styles/sass/Main.sass";
import queijoHover from "../images/queijo-e-prosa-hover.png";
import voltageHover from "../images/voltage-hover.png";
import omegaHover from "../images/omega-energia-hover.png";
import React, { useState } from "react";
function Main() {
  const [isShown, setIsShown] = useState(false);
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  window.addEventListener("mousemove", (e) => {
    setCursorX(e.pageX);
    setCursorY(e.pageY);
  });

  return (
    <main className="main container">
      <h1 className="main__title">
      <div
            className="cursor"
            style={{
              left: cursorX + "px",
              top: cursorY + "px",
            }}
          ></div>
        <span className="main__title-normal">
          Product Design Lead baseado em São Paulo, construindo{" "}
        </span>

        <span className="main__title-hover experiencias-digitais">
          experiências digitais,
        </span>

        <span className="main__title-normal">estratégia e </span>
        <span
          className="main__title-hover marcas"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          
          marcas
          {isShown && (
            <div className="box-hover marcas-hover">
              <img src={queijoHover} alt="" className="delay" />
              <img src={voltageHover} alt="" className="delay" />
              <img src={omegaHover} alt="" className="delay" />
            </div>
          )}
        </span>
        <span className="main__title-normal">para</span>
        <span
          className="main__title-hover companhias"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          
          companhias
          {isShown && (
            <div className="box-hover marcas-hover">
              <img src={queijoHover} alt="" className="delay" />
              <img src={voltageHover} alt="" className="delay" />
              <img src={omegaHover} alt="" className="delay" />
            </div>
          )}
        </span>
        <span className="main__title-normal">
          que impactam positivamente a vida das{" "}
        </span>
        <span className="main__title-hover pessoas">pessoas.</span>
      </h1>
    </main>
  );
}

export default Main;
