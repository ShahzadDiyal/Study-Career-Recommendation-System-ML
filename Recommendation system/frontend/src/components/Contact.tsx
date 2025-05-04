import '../css/contact.css';

const Contact = () => {
  return (
    <div className="contact-page d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className=" contact-card shadow-lg p-4">
              <h2 className="text-center text-primary mb-3">Contact Us</h2>
              <p className="text-center text-muted mb-4">
                We'd love to hear from you. Fill out the form below and our team will get back to you shortly.
              </p>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="you@example.com" required />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" placeholder="Subject of your message" required />
                </div>

                <div className="mb-4">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" placeholder="Write your message..." required></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary px-5 py-2">Send Message</button>
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
