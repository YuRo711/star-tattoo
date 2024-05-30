import { questions } from "../../utils/constants";
import Question from "../Question/Question";
import "./FAQ.css";

function FAQ(props) {
  return (
    <div className="faq">
      <h2 className="faq__title">F.A.Q.</h2>
      <div className="faq__questions">
        {
          questions.map((data) => {
            return (
              <Question
                title={data.title}
                text={data.text}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default FAQ;