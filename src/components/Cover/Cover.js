import "./Cover.css";
import vector from "../../images/Rectangle 1.svg";
import girl from "../../images/girl 1.png";
import tail from "../../images/bubble tail.svg";


function Cover(props) {
  return(
    <div className="cover">
      <div className="cover__info">
        <h1 className="cover__title">
          Body paintings that <span className="cover__span">Define</span> Your Soul
        </h1>
        <button className="cover__button">
          Book a visit
        </button>
        <div className="cover__schedule">
          <div className="cover__time-icon"></div>
          <div className="cover__schedule-week">
            <p className="cover__work-time">
              <span className="cover__week-days">Mon-Fri</span>
              11:00-21:00
            </p>
            <p className="cover__work-time">
              <span className="cover__week-days">Sat-Sun</span>
              14:00-20:00
            </p>
          </div>
        </div>
      </div>
      <div className="cover__illustration">
        <img className="cover__vector"
          src={vector}
          alt="vector background"
        />
        <img className="cover__vector"
          src={girl}
          alt="vector background"
        />
      </div>
    </div>
  );
}

export default Cover;