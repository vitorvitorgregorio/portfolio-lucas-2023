import "../../styles/sass/Global.sass";
import "../../styles/sass/Fonts.sass";
import "../../styles/sass/Project-page.sass";
import React from "react";
import { ReactComponent as DateCase } from "../../svg/date-case.svg";
// Images
import Image1 from "../../images/projects/fineapp/img-1.png";
import Image2 from "../../images/projects/fineapp/img-2.png";
import Image3 from "../../images/projects/fineapp/img-3.png";
import Image4 from "../../images/projects/fineapp/img-4.png";
import Image5 from "../../images/projects/fineapp/img-5.png";
import Image6 from "../../images/projects/fineapp/img-6.png";
import Image7 from "../../images/projects/fineapp/img-7.png";
import Image8 from "../../images/projects/fineapp/img-8.png";
import Image9 from "../../images/projects/fineapp/img-9.png";
import Image10 from "../../images/projects/fineapp/img-10.png";

function Date(props) {
  return (
    <li className="project-date">
      <DateCase className="project-date__icon" /> {props.name}
    </li>
  );
}
function Tag(props) {
  return <li className="project-tag"> {props.name} </li>;
}
function People(props) {
  return <li> {props.name} </li>;
}

function Project() {
  return (
    <div className="project">
      <img src={Image1} alt="" />
      <div className="project-description">
        <div className="project-description__column">
          <div className="project-description__row first">
            <h1 className="project-title">FineApp</h1>
            <ul className="project-tags">
              <Date name="2019" />
              <Tag name="Product Design" />
              <Tag name="Branding" />
              <Tag name="Direção de Arte" />
            </ul>
          </div>
          <div className="project-description__row second">
            <h2 className="project-subtitle">Pessoas</h2>
            <ul className="peoples">
              <People name="Lucas Gregorio" />
              <People name="Ricardo Coimbra" />
              <People name="Julia Sousa" />
            </ul>
          </div>
        </div>
        <div className="project-description__text">
          <p>
            Você se lembra das coisas mais importantes que aprendeu durante sua
            vida? Desde as primeiras palavras, até a solução dos problemas mais
            complexos? A Fine é uma startup que acredita que a conexão humana e
            as experiências são as melhores formas de aprendizado.
          </p>
          <p>
            E por isso ela nasceu, com vontade de empoderar pessoas para que
            elas se sintam mais livres. Mais do que promover aprendizado, é uma
            empresa que quer criar conexões reais.
          </p>

          <p>
            Mas porque esse desejo intriseco? Pois a Fine acredita que as
            experiências e conhecimentos das pessoas são seus maiores bens, e
            por isso veio ao mundo para ajuda-las a compartilhar o que elas
            sabem e serem recompensado por isso!
          </p>

          <p>
            Nesse projeto tivemos o desafio de criar um universo visual e
            discursivo despretencioso, mas consciente. Divertido mas que traga
            seriedade, porque, afinal, quem está disposto a ensinar realmente
            sabe o que está fazendo.
          </p>

          <p>
            E mais do que isso, ficamos responsaveis pela concepção da
            plataforma que faz o match entre quem quer aprender com quem quer
            ensinar!
          </p>
        </div>
      </div>
      <img src={Image2} alt="" />
      <div className="double-image">
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
      </div>
      <img src={Image5} alt="" />
      <img src={Image6} alt="" />
      <img src={Image7} alt="" />
      <div className="double-image">
        <img src={Image8} alt="" />
        <img src={Image9} alt="" />
      </div>
      <img src={Image10} alt="" />
      <div className="next-project">
        <h3 className="next-project-title">Próximo projeto</h3>
        <div className="next-project-description">
          <div className="next-project-row">
            <h4 className="next-project-name">Start Empreendedor</h4>
            <ul className="project-tags">
                  <Date name="2021" />
                  <Tag name="Estratégia" />
                  <Tag name="Identidade visual" />
                  <Tag name="Digital" />
                  <Tag name="Embalagem" />
                  <Tag name="Social Media" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
