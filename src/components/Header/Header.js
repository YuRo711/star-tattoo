import Cover from "../Cover/Cover";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header(props) {
  return(
    <header className="header">
      <Navigation/>
      <Cover/>
    </header>
  );
}

export default Header;