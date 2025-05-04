import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import '../css/privacyandpolicy.css'

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar2 />
    <div className="container privacy-policy my-5 p-4 shadow rounded">
      <h1 className="text-center mb-4 text-primary">Privacy Policy</h1>
      <p className="lead text-center mb-5">
        Learn how we collect, use, and protect your data while using our recommendation system.
      </p>

      <section className="mb-4">
        <h3>1. Information We Collect</h3>
        <ul>
          <li>Personal details (like name and email) provided by users.</li>
          <li>Input data used to generate recommendations.</li>
          <li>Technical data such as IP address, browser type, and device info.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To generate personalized recommendations.</li>
          <li>To improve our system’s accuracy and user experience.</li>
          <li>To send updates or promotional emails (only with your permission).</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>3. Data Protection</h3>
        <p>We use secure technologies and procedures to safeguard your information from unauthorized access or disclosure.</p>
      </section>

      <section className="mb-4">
        <h3>4. Data Sharing</h3>
        <p>We never sell your data. We only share information with trusted partners when necessary for system functionality or legal compliance.</p>
      </section>

      <section className="mb-4">
        <h3>5. Your Rights</h3>
        <p>You may request access to or deletion of your personal information at any time by contacting us at <strong>support@yourdomain.com</strong>.</p>
      </section>

      <section className="mb-4">
        <h3>6. Changes to This Policy</h3>
        <p>This policy may be updated periodically. Any changes will be posted here with an updated date.</p>
      </section>

      <p className="text-muted text-end mt-5">Last updated: May 4, 2025</p>
    </div>

    <Footer />
    </>
  );
};

export default PrivacyPolicy;
