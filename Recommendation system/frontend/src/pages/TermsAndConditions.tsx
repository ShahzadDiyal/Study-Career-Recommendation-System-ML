import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import '../css/termsAndConditions.css'

const TermsAndConditions = () => {
  return (
    <>
    <Navbar2 />
    <div className="container terms-conditions my-5 p-4 shadow rounded">
      <h1 className="text-center text-primary mb-4">Terms and Conditions</h1>
      <p className="lead text-center mb-5">
        These terms govern your use of our recommendation system and website. Please read them carefully.
      </p>

      <section className="mb-4">
        <h3>1. Eligibility</h3>
        <p>
          You must be at least 13 years old to use our services. By accessing this website, you confirm that you meet this requirement.
        </p>
      </section>

      <section className="mb-4">
        <h3>2. User Responsibilities</h3>
        <ul>
          <li>You agree to use the website only for lawful purposes.</li>
          <li>You will not upload any harmful, misleading, or illegal content.</li>
          <li>You are responsible for keeping your login information secure.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h3>3. Service Availability</h3>
        <p>
          We strive to ensure the platform is available 24/7, but we do not guarantee uninterrupted access. Maintenance and updates may occasionally cause downtime.
        </p>
      </section>

      <section className="mb-4">
        <h3>4. Modifications to the Service</h3>
        <p>
          We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
        </p>
      </section>

      <section className="mb-4">
        <h3>5. Termination</h3>
        <p>
          We may suspend or terminate your access to our platform if you violate any of these terms or engage in any abusive or harmful behavior.
        </p>
      </section>

      <section className="mb-4">
        <h3>6. External Links</h3>
        <p>
          Our website may contain links to third-party sites. We are not responsible for the content or policies of those sites.
        </p>
      </section>

      <section className="mb-4">
        <h3>7. Governing Law</h3>
        <p>
          These terms shall be governed by and interpreted in accordance with the laws of your local jurisdiction, without regard to conflict of law principles.
        </p>
      </section>

      <section className="mb-4">
        <h3>8. Contact Information</h3>
        <p>
          For any questions or concerns, please contact us at <strong>legal@yourdomain.com</strong>.
        </p>
      </section>

      <p className="text-muted text-end mt-5">Last updated: May 4, 2025</p>
    </div>
    <Footer />
    </>
  );
};

export default TermsAndConditions;
