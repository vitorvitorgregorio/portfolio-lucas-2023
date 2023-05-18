import { ReactComponent as LogoFooter } from "../svg/logo-footer.svg";
import { ReactComponent as Link } from "../svg/new-window.svg";
import "../styles/sass/Footer.sass";

function Footer() {
  return (
    
    <footer className="footer">
      
        <div className="footer__copyright">
          <LogoFooter className="logo__footer" />
          <p>Copyright - 2023 - Lucas Gregorio</p>
        </div>
        <div className="footer__line"> </div>
        <nav className="footer__links">
          <ul className="footer__list">
            <li>
              <a className="footer__link" href="https://www.linkedin.com/in/lucas-gregorio/" target="_blank">
                <Link className="link-icon" />
                Linkedin
              </a>
            </li>
            <li>
              <a className="footer__link" href="https://dribbble.com/lucasgregorio" target="_blank">
                <Link className="link-icon" />
                Dribbble
              </a>
            </li>
            <li>
              <a className="footer__link" href="https://www.behance.net/lucasgregorio" target="_blank">
                <Link className="link-icon" />
                Behance
              </a>
            </li>
          </ul>
          <a className="footer__link" href="https://vitor-gregorio.netlify.app/" target="_blank">
            <Link className="link-icon" />
            Desenvolvido por Vitor Gregorio
          </a>
        </nav>
      
    </footer>
  );
}

export default Footer;
