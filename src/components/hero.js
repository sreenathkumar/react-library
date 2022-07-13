import slideImage from "../images/slide1.jpg";
import "../css/hero.css";
function Hero() {
  return (
    <section id="hero">
      <div className="hero">
        <div className="slider-container container">
          <div className="slide">
            <div className="slide-texts">
              <h1>Get The best books to Read and Enjoy.</h1>
              <p>
                Grab the books which people are reading and enjoying around the
                globe. Reads what people are saying about the books and also
                give your opinion about the books.
              </p>
            </div>
            <div className="slide-image">
              <img src={slideImage} alt="img-hero" />
            </div>
          </div>
        </div>
        {/* <!--<div class="slider-nav">
                <button class="slider-indicator active-slide"></button>
                <button class="slider-indicator"></button>
                <button class="slider-indicator"></button>
            </div>--> */}
      </div>
    </section>
  );
}
export default Hero;
