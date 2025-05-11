import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import '../css/termsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <>
      <Navbar2 />
      <div className="container terms-conditions my-3 shadow rounded">
        <h1 className="text-center mb-4">Terms and Conditions</h1>
        <p className="lead text-center mb-5">
          These terms outline the rules and responsibilities when using our AI-based career and academic recommendation system. Please read them carefully before proceeding.
        </p>

        <section className="mb-4">
          <h3>1. Eligibility</h3>
          <p>
            You must be at least 13 years old to use our services. By using this platform, you confirm that you meet the minimum age requirement.
          </p>
        </section>

        <section className="mb-4">
          <h3>2. Use of the Recommendation System</h3>
          <ul>
            <li>The career guidance and university suggestions provided by our system are based on the information you submit.</li>
            <li>The suggestions are generated using AI models and public data; they are intended to assist in decision-making, not guarantee outcomes.</li>
            <li>You are responsible for verifying any educational or career decisions based on our recommendations.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h3>3. Data Privacy</h3>
          <p>
            We collect personal and academic data only for generating relevant recommendations. Your data will not be sold or shared with third parties without your consent. Please refer to our Privacy Policy for more details.
          </p>
        </section>

        <section className="mb-4">
          <h3>4. Accuracy of Information</h3>
          <p>
            While we strive to keep university information, career paths, and fee structures accurate and updated, some content may be outdated or sourced from third parties. Users are encouraged to verify the information directly with the respective institutions.
          </p>
        </section>

        <section className="mb-4">
          <h3>5. Limitation of Liability</h3>
          <p>
            We are not liable for any decisions made based on our recommendations, including but not limited to admission outcomes, financial costs, or career choices.
          </p>
        </section>

        <section className="mb-4">
          <h3>6. Modifications to the Service</h3>
          <p>
            We may update the features, design, or terms of the service at any time. Continued use after changes implies acceptance of the new terms.
          </p>
        </section>

        <section className="mb-4">
          <h3>7. User Conduct</h3>
          <ul>
            <li>You agree to provide accurate, lawful, and respectful data.</li>
            <li>You will not use the service to mislead, spam, or attempt unauthorized access.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h3>8. External Links</h3>
          <p>
            Our platform may include links to third-party websites (e.g., university sites). We do not control or take responsibility for their content, accuracy, or policies.
          </p>
        </section>

        <section className="mb-4">
          <h3>9. Governing Law</h3>
          <p>
            These terms are governed by the laws of the Islamic Republic of Pakistan. Any disputes shall be resolved under Pakistani jurisdiction.
          </p>
        </section>

        <section className="mb-4">
          <h3>10. Contact Information</h3>
          <p>
            If you have any questions or concerns regarding these terms, you may contact us at <strong>support@careeradvisor.pk</strong>.
          </p>
        </section>

        <p className="text-end mt-5">Last updated: May 11, 2025</p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
