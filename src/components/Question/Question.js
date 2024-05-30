import { useState } from "react";
import "./Question.css";

function Question(props) {
  function toggleIsOpen() {
    setIsOpen(!isOpen);
  }

  const { title, text } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question">
      <div className="question__header">
        <h3 className="question__title">{title}</h3>
        <button className={`question__open-button 
            question__open-button_${isOpen ? "minus" : "plus"}`}
          type="button"
          onClick={toggleIsOpen}
        ></button>
      </div>
      <p className={`question__text ${isOpen ? "" : "question__text_hidden"}`}>
        {text}
      </p>
    </div>
  );
}

export default Question;