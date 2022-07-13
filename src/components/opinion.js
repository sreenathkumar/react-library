import "../css/opinion.css";

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
          <div className="form-container">
            <h2 className="form-heading">Get in Touch</h2>
            <span className="form-underline"></span>
            <form action="">
              <input
                className="form-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                required
              />
              <div className="inline-input">
                <input
                  className="form-input"
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name"
                  required
                />
                <input
                  className="form-input"
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last Name"
                  required
                />
              </div>
              <input
                className="form-input"
                type="text"
                name="subject"
                placeholder="Subject"
                id="subject"
              />
              <textarea
                className="form-input"
                name="comment"
                id="comment"
                placeholder="Your Words"
                cols="30"
                rows="4"
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Opinion;
