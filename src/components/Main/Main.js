import FAQ from "../FAQ/FAQ";
import Gallery from "../Gallery/Gallery";
import "./Main.css";

function Main(props) {
  return (
    <main className="main">
      <Gallery/>
      <FAQ/>
    </main>
  );
}

export default Main;