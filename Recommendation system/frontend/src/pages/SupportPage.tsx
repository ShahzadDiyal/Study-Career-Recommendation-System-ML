
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';

const SupportPage = () => {
  return (
    <>
    <Navbar2 />
    <div className="container support-page my-5 p-4 shadow-sm rounded">
      <h1 className="text-center text-primary mb-4">Need Help?</h1>
      <p className="text-center mb-4 lead">
        If you’re facing any issues with our recommendation system or services, we’re here to help.
      </p>

      <div className="row text-center mb-5">
        <div className="col-md-4 mb-4">
          <div className="support-box p-3 border rounded h-100">
            <h5>Account Issues</h5>
            <p>Having trouble logging in, updating your profile, or resetting your password?</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="support-box p-3 border rounded h-100">
            <h5>Technical Problems</h5>
            <p>System errors, recommendation bugs, or unexpected behavior on the site?</p>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="support-box p-3 border rounded h-100">
            <h5>General Questions</h5>
            <p>Want to know more about our services, privacy, or terms?</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/contact" className="btn btn-primary btn-lg">
          Contact Support
        </Link>
      </div>
    </div>
    
    <Footer />
    </>
  );
};

export default SupportPage;
