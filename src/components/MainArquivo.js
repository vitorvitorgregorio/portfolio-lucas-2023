import {ReactComponent as ArrowNext} from "../svg/arrow-next.svg"
import {ReactComponent as ArrowBack} from "../svg/arrow-back.svg"
import '../styles/sass/MainArquivo.sass'
import { Link } from "react-router-dom"
function MainArquivo() {
    return (

        <main className="main-arquivo">

            <Link to="/" className="main-arquivo__link">
                <ArrowBack />
                Voltar
            </Link>
            <h1 className="main-arquivo__title">Arquivo <span>Morto</span></h1>
            <p className="main-arquivo__link">
                Scroll
                <ArrowNext />
            </p>

        </main>
    )
}


export default MainArquivo