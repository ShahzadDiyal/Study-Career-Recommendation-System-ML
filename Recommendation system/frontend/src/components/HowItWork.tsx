import '../css/howitworks.css';

const HowItWork = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="howitwork-section text-center">
        <h3 className="text-white fw-bold" style={{ fontSize: "2rem",marginBottom:"20px" }}>
          How It Works!
        </h3>
        <div className="steps-container">
          <div className="step-card">
            <div className="icon">📝</div>
            <h5>1. Enter Preferences</h5>
            <p>Fill in your interests, strengths, and goals.</p>
          </div>
          <div className="step-card">
            <div className="icon">🤖</div>
            <h5>2. AI Analysis</h5>
            <p>Smart algorithm analyzes and finds your best fit.</p>
          </div>
          <div className="step-card">
            <div className="icon">🎯</div>
            <h5>3. Get Recommendations</h5>
            <p>View personalized academic or career suggestions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
