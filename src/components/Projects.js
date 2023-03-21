import "../styles/sass/Projects.sass";
import { ReactComponent as NewCaseStar } from "../svg/new-case-star.svg";
import { ReactComponent as DateCase } from "../svg/date-case.svg";

function Projects() {
  return (
    <section className="projects">
      <div className="container">
        
        <div className="projects__title">Produtos & Projetos</div>

        <div className="projects__row">
          <div className="projects__card">
            <div className="btg projects__card-background">
              
              <span className="projects__tag new-case-star">
                <NewCaseStar />
                New case
              </span>
            </div>
            <div className="projects__card-titles">
              <h4 className="projects__card-subTitle"> BTG Pactual Content </h4>
              <h3 className="projects__card-title">
                Um hub de conteúdos de Research do maior banco de investimentos
                da America Latina
              </h3>
            </div>
          </div>
          <div className="projects__card">
            <div className="fine-app projects__card-background">
              
              <span className="projects__tag date-case">
                <DateCase />
                2018
              </span>
            </div>
            <div className="projects__card-titles">
              <h4 className="projects__card-subTitle"> FineApp </h4>
              <h3 className="projects__card-title">
                Empoderando as pessoas por meio da troca de conhecimento
              </h3>
            </div>
          </div>
        </div>

        <div className="projects__row">
          <div className="projects__card">
            <div className="start-empreendedor projects__card-background">
              
              <span className="projects__tag new-case-star">
                <DateCase />
                2021
              </span>
            </div>
            <div className="projects__card-titles">
              <h4 className="projects__card-subTitle"> Start Empreendedor </h4>
              <h3 className="projects__card-title">
                O guia que ajuda os empreendedores a estruturar e escalar seu
                negócio
              </h3>
            </div>
          </div>
          <div className="projects__card">
            <div className="brasil-dental projects__card-background">
              
              <span className="projects__tag date-case">
                <DateCase />
                2020
              </span>
            </div>
            <div className="projects__card-titles">
              <h4 className="projects__card-subTitle"> Brasildental </h4>
              <h3 className="projects__card-title">
                Simplificando a busca pela felicidade e pelo sorriso do
                brasileiro
              </h3>
            </div>
          </div>
        </div>

        <div className="projects__row">
          <div className="projects__card">
            <div className="queijo-e-prosa projects__card-background">
              
              <span className="projects__tag date-case">
                <DateCase />
                2019
              </span>
            </div>
            <div className="projects__card-titles">
              <h4 className="projects__card-subTitle">Queijo & Prosa</h4>
              <h3 className="projects__card-title">
                No final das contas o que importa mesmo é a felicidade, né? E
                queijo é muita felicidade
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
