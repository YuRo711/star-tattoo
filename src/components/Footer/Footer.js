import "./Footer.css";
import logo from "../../images/Star 1.svg";
import youtube from "../../images/youtube.svg";
import twitter from "../../images/twitter.svg";
import insta from "../../images/insta.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className="footer__logo"
          src={logo}
          alt="star tattoo logo"
        />
        <div className="footer__links">
          <div className="footer__link-column">
            <a className="footer__link" href="#">Home page</a>
            <a className="footer__link" href="#">Portfolio</a>
            <a className="footer__link" href="#">About us</a>
          </div>
          <div className="footer__link-column">
            <a className="footer__link" href="#">Inquiries</a>
            <a className="footer__link" href="#">Pricings</a>
            <a className="footer__link" href="#">Challenges</a>
          </div>
        </div>
        <div className="footer__socials">
          <a className="footer__social-link" href="#">
            <img className="footer__social-icon"
              src={youtube}
              alt="youtube icon"
            />
          </a>
          <a className="footer__social-link" href="#">
            <img className="footer__social-icon"
              src={twitter}
              alt="twitter icon"
            />
          </a>
          <a className="footer__social-link" href="#">
            <img className="footer__social-icon"
              src={insta}
              alt="instagram icon"
            />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__info-links">
          <a className="footer__link" href="#">Terms & conditions</a>
          <a className="footer__link" href="#">Privacy policy</a>
        </div>
        <p className="footer__copyright">
          © Made by YuRo711
        </p>
      </div>
    </footer>
  );
}

export default Footer;