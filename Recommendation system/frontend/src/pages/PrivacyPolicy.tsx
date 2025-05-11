import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import '../css/privacyandpolicy.css'

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar2 />
    <div className="container privacy-policy my-2 shadow rounded">
      <h1 className="heading text-center mb-2">Privacy Policy</h1>
      <p className="lead text-center text-white mb-3">
        Learn how we collect, use, and protect your data while using our recommendation system.
      </p>


      <section className="mb-4">
        <h3>Introduction</h3>
        <p>
          Welcome to our recommendation system. Your privacy is of utmost importance to us.
          This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
        </p>
      </section>

      <section className="mb-4">
        <h3>1. Information We Collect</h3>
        <ul>
          <li><strong>Personal Details:</strong> Such as your name and email address, only when voluntarily provided.</li>
          <li><strong>Input Data:</strong> Information you input to receive recommendations.</li>
          <li><strong>Technical Data:</strong> Including IP address, browser type, and device information, collected automatically to ensure system functionality and security.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>2. How We Use Your Information</h3>
        <ul>
          <li><strong>Providing Recommendations:</strong> To generate personalized suggestions based on your input.</li>
          <li><strong>System Improvement:</strong> To enhance the accuracy and user experience of our recommendation system.</li>
          <li><strong>Communication:</strong> To send updates or promotional materials, only with your explicit consent.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>3. Data Protection</h3>
        <ul>
          <li><strong>Encryption:</strong> All data is encrypted during transmission and storage.</li>
          <li><strong>Access Controls:</strong> Only authorized personnel have access to your data.</li>
          <li><strong>Regular Audits:</strong> We conduct regular security audits to identify and mitigate potential vulnerabilities.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>4. Data Sharing</h3>
        <p>
          We respect your privacy and do not sell or rent your personal information.
          Data is shared only under the following circumstances:
        </p>
        <ul>
          <li><strong>Service Providers:</strong> With trusted partners who assist in operating our system, under strict confidentiality agreements.</li>
          <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>5. Your Rights</h3>
        <ul>
          <li><strong>Access Your Data:</strong> Request a copy of the information we hold about you.</li>
          <li><strong>Correct Your Data:</strong> Request corrections to any inaccurate or incomplete information.</li>
          <li><strong>Delete Your Data:</strong> Request deletion of your personal information from our systems.</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time.</li>
        </ul>
        <p>
          To exercise these rights, please contact us at <strong>support@yourdomain.com</strong>.
        </p>
      </section>

      <section className="mb-4">
        <h3>6. Changes to This Policy</h3>
        <p>
          We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
          We encourage you to review this policy regularly.
        </p>
      </section>

      <section className="mb-4">
        <h3>Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
          <br />
          <strong>Email:</strong> <u>shahzaddiyal161@gmail.com </u><br />
          <strong>Phone:</strong> <u>+92 348 4567161</u>
        </p>
      </section>

    <p className="text-end mt-5">Last updated: May 11, 2025</p>
    </div>

    <Footer />
    </>
  );
};

export default PrivacyPolicy;
