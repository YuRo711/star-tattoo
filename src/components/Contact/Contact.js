import "./Contact.css";
import image from "../../images/letters.svg";
import { useState } from "react";

function Contact(props) {
  function submit() {
    setEmail("");
  }

  const [email, setEmail] = useState("");


  return (
    <div className="contact">
      <img className="contact__image"
        src={image}
        alt="envelopes"
      />
      <div className="contact__info">
        <h2 className="contact__title">
          Subscribe to our Newsletter
        </h2>
        <div className="contact__field">
          <input className="contact__input"
            type="text"
            placeholder="Enter your email..."
            value={email}
            onChange={setEmail}
          />
          <button className="contact__button"
            type="submit"
            onClick={submit}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;