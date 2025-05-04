import '../css/benefits.css';

const Benefits = () => {
  return (
    <div className="benefits-section">
      <p className="benefits-heading">Key Benefits</p>
      <div className="benefits-wrapper">
        <div className="benefits-image">
          <img src="incentive.png" alt="Benefits Illustration" />
        </div>
        <div className="benefits-list">
          <ul>
            <li>Personalized Study Path</li>
            <li>AI-Powered Insights</li>
            <li>Saves Time and Confusion</li>
            <li>Boosts Academic Confidence</li>
            <li>Career-Oriented Planning</li>
            <li>Improves Decision-Making Skills</li>
            <li>Adapts to Changing Interests</li>
            <li>User-Friendly and Accessible</li>
            <li>Early Guidance for Better Outcomes</li>
            <li>Encourages Self-Discovery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
