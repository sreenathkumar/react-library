import "../css/opinion.css";

import Form from "./Form";

function Opinion() {
  return (
    <section id="opinion">
      <div className="container">
        <div className="opinion">
          <div className="texts">
            <h2>
              Have any opinion or
              <br />
              <span>Recommendation</span>
            </h2>
            <p>
              Please co operate with us to enrich our book library and user
              experience by giving your valueable opinion. You can tell where
              are you facing problem, how to improve your experince and also you
              can suggest books which you like but not available to us. We will
              try our best to include the books in our library.
            </p>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default Opinion;
