import "./Gallery.css";
import master from "../../images/tatoo artist 1.png";
import dots from "../../images/dots background 1.svg";
import gorilla from "../../images/gorilla.png";
import snake from "../../images/snake.png";
import tattoo from "../../images/man-doing-tattoo-tattoo-salon 1.png";

function Gallery(props) {
  return (
    <section className="gallery">
      <div className="gallery__column">
        <h2 className="gallery__title">
          Tailored process and experienced Masters
        </h2>
        <img className="gallery__dots"
          src={dots}
          alt="dots background"
        />
        <img className="gallery__artist"
          src={master}
          alt="tattoo artist"
        />
      </div>
      <div className="gallery__tattoos">
        <div className="gallery__tattoo">
          <img className="gallery__art"
            src={gorilla}
            alt="gorilla tattoo art"
          />
          <p className="gallery__price">$2800.00</p>
        </div>
        <div className="gallery__tattoo">
          <img className="gallery__art"
            src={snake}
            alt="snake tattoo art"
          />
          <p className="gallery__price">$1500.00</p>          
        </div>
      </div>
      <div className="gallery__column">
        <img className="gallery__process"
          src={tattoo}
          alt="tattoo process"
        />
        <div className="gallery__gradient"></div>
        <div className="gallery__contact">
          <h2 className="gallery__title">
            Highest rated Tattoo Club in California
          </h2>
          <p className="gallery__text">
            Don't hesitate. Contact us now, and we'll guide you through the entire process! 
          </p>
          <button className="gallery__button"
            type="button"
          >
            Contact us now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Gallery;