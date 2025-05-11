import "../css/contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="contact-card">
              <h2 className="text-center mb-3">Contact Us</h2>
              <p className="text-center text-light mb-4">
                We'd love to hear from you. Fill out the form below and our team
                will get back to you shortly.
              </p>
              <form>
                <div className="mb-2">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control bg-none text-dark"
                    placeholder="you@example.com"
                    required
                  ></input>
                </div>
                <div className="mb-2">
                  <label className="form-label text-start">Email Address</label>
                  <input
                    type="email"
                    className="form-control bg-none text-dark"
                    placeholder="you@example.com"
                    required
                  ></input>
                </div>
                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control bg-none text-dark"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 py-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
