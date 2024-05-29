import Companies from "../Companies/Companies";
import Cover from "../Cover/Cover";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header(props) {
  return(
    <header className="header">
      <Navigation/>
      <Cover/>
      <Companies/>
    </header>
  );
}

export default Header;