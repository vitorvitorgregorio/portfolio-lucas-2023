import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Lixo } from "../svg/lixo.svg";
import "../styles/sass/Header.sass";
import { Link } from "react-router-dom";
import Home from "../routes/Home";


function Header() {
  return (
    <header className="header">
      
      <Link to="/" className="logo-contain">
        <Logo className="logo" />
      </Link>

      <Link to="/arquivo" className="arquivo-contain">
        <Lixo className="lixo" />
        <span className="arquivo"> Arquivo </span>
      </Link>
    </header>
  );
}

export default Header;
