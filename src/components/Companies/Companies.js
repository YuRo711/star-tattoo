import { companies } from "../../utils/constants";
import "./Companies.css";

function Companies() {
  return (
    <div className="companies">
      {
        companies.map((image) => (
          <img className="companies__logo"
            src={image}
            alt="company logo"
          />
        ))
      }
    </div>
  );
}

export default Companies;