import "./Navigation.css";
import logo from "../../images/Star 1.svg";

function Navigation(props) {
  return(
    <nav className="navigation">
      <div className="navigation__links">
        <a className="navigation__link" href="#">Home page</a>
        <a className="navigation__link" href="#">Portfolio</a>
        <a className="navigation__link" href="#">About ut</a>
      </div>
      <img className="navifation__logo"
        src={logo}
        alt="star logo"
      />
      <div className="navigation__links">
        <a className="navigation__link" href="#">Inquiries</a>
        <a className="navigation__link" href="#">Pricings</a>
        <a className="navigation__link" href="#">Challenges</a>
      </div>
    </nav>
  );
}

export default Navigation;