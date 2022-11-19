import '../css/form.css'

export default function Form() {
   return (
      <div className="form-container">
         <h2 className="form-heading">Get in Touch</h2>
         <span className="form-underline"></span>
         <form action="">
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
   )
}
