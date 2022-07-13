import TestimonialCard from "./testimonial-card";
import "../css/testimonial.css";
import client1 from "../images/client1.png";
import client2 from "../images/client2.png";
import client3 from "../images/client3.png";

function Testimonial() {
  return (
    <section id="testimonial">
      <div className="testimonial-container container">
        <div className="testimonial-title">
          <h2>Our Happy Book Lovers</h2>
          <span></span>
        </div>
        <div className="testimonials">
          <TestimonialCard clientImage={client1}></TestimonialCard>
          <TestimonialCard clientImage={client2}></TestimonialCard>
          <TestimonialCard clientImage={client3}></TestimonialCard>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
