import "../styles/sass/Main.sass";
//experiências digitais
import brasilDentalEx from "../images/experiencias-digitais/brasil-dental-ex.png";
import fineEx from "../images/experiencias-digitais/fine-ex.png";
import OmegaEnergiaEx from "../images/experiencias-digitais/omega-energia-ex.png";
//Marcas
import omegaMarcas from "../images/marcas/omega-marcas.png";
import queijoMarcas from "../images/marcas/queijo-e-prosa-marcas.png";
import voltageMarcas from "../images/marcas/voltage-marcas.png";
//companhias
import ciclicCompanhias from "../images/companhias/ciclic.png";
import heinekenCompanhias from "../images/companhias/heineken.png";
import btgCompanhias from "../images/companhias/btg.png";
import omegaCompanhias from "../images/companhias/omega.png";
import queijoCompanhias from "../images/companhias/queijo-e-prosa.png";
import BrasilDentalCompanhias from "../images/companhias/brasil-dental.png";

import React, { useState } from "react";
function Main() {
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
          Product Design Lead baseado em São Paulo, construindo
        </span>

        <span className="main__title-hover experiencias-digitais">
          experiências digitais,
          <div className="box-hover experiencias-digitais">
          <div className="image-box omega">
              <img src={OmegaEnergiaEx} alt="" />
              <p>Omega Energia</p>
            </div>
            <div className="image-box fine">
              <img src={fineEx} alt="" />
              <p>FineApp</p>
            </div>
            <div className="image-box dental">
              <img src={brasilDentalEx} alt="" />
              <p>Brasil Dental</p>
            </div>
          </div>
        </span>

        <span className="main__title-normal">estratégia e </span>
        <span className="main__title-hover marcas">
          marcas
          <div className="box-hover marcas">
            
            <div className="image-box">
              <img src={queijoMarcas} alt="" />
              <p>Queijo & Prosa</p>
            </div>
            <div className="image-box">
              <img src={voltageMarcas} alt="" />
              <p>Voltage</p>
              
            </div>
            <div className="image-box">
            <img src={omegaMarcas} alt="" />
              <p>Omega energia</p>
            </div>
          </div>
        </span>
        <span className="main__title-normal">para</span>
        <span className="main__title-hover companhias">
          companhias
          <div className="box-hover companhias">
            <div className="image-box">
              <img src={ciclicCompanhias} alt="" />
              <p>Ciclic</p>
            </div>
            <div className="image-box">
              <img src={heinekenCompanhias} alt="" />
              <p>Heineken</p>
            </div>
            <div className="image-box">
              <img src={btgCompanhias} alt="" />
              <p>BTG Pactual</p>
            </div>
            <div className="image-box">
              <img src={BrasilDentalCompanhias} alt="" />
              <p>Banco do Brasil</p>
            </div>
            <div className="image-box">
              <img src={queijoCompanhias} alt="" />
              <p>Queijo & Prosa</p>
            </div>
            <div className="image-box">
              <img src={omegaCompanhias} alt="" />
              <p>Omega energia</p>
            </div>
          </div>
        </span>
        <span className="main__title-normal">
          que impactam positivamente a vida das pessoas.
        </span>
      </h1>

      <h1 className="main__title-mobile">
        Product Design Lead baseado em São Paulo, construindo experiências
        digitais, estratégia e marcas para companhias que impactam positivamente
        a vida das pessoas.
      </h1>
    </main>
  );
}

export default Main;
