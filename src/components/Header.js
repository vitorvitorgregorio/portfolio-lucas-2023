import { ReactComponent as Logo } from "../svg/logo.svg";
import { ReactComponent as Lixo } from "../svg/lixo.svg";
import "../styles/sass/Header.sass";

function Header() {
  return (
    <header className="header">
      
      <a href="#" className="logo-contain">
        <Logo className="logo" />
      </a>

      <a href="#" className="arquivo-contain">
        <Lixo className="lixo" />
        <span className="arquivo"> Arquivo </span>
      </a>
    </header>
  );
}

export default Header;
