import "../css/form.css";

import emiljs from "@emailjs/browser";

export default function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = {
      from_name: `${formData.get("first-name")} ${formData.get("last-name")}`,
      to_name: "My Library",
      subject: formData.get("subject"),
      email: formData.get("email"),
      message: formData.get("comment"),
    };

    const res = await emiljs.send(
      process.env.REACT_APP_EMAIL_SERVICE_ID,
      process.env.REACT_APP_EMAIL_TEMPLATE_ID,
      data,
      { publicKey: process.env.REACT_APP_EMAIL_USER_ID }
    );

    if (res.status === 200) {
      alert("Email sent successfully");
      e.target.reset();
    } else {
      alert(
        "Email not sent. we are sorry for the inconvenience. Please try again later."
      );
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-heading">Get in Touch</h2>
      <span className="form-underline"></span>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
        </div>

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
        <div>
          <input
            className="form-input"
            type="text"
            name="subject"
            placeholder="Subject"
            id="subject"
          />
        </div>
        <div>
          <textarea
            className="form-input"
            name="comment"
            id="comment"
            placeholder="Your Words"
            cols="30"
            rows="4"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
