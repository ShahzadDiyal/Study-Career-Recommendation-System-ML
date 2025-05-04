import '../css/howitworks.css';

const HowItWork = () => {
  return (
    <div className="d-flex justify-content-center" style={{ paddingTop: "40px" }}>
      <div className="howitwork-section text-center">
        <h3 className="text-white mb-5 fw-bold" style={{ fontSize: "2rem" }}>How It Works!</h3>
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="step-card p-4 shadow">
              <div className="icon mb-3">📝</div>
              <h5>1. Enter Preferences</h5>
              <p>Fill in your interests, strengths, and goals.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="step-card p-4 shadow">
              <div className="icon mb-3">🤖</div>
              <h5>2. AI Analysis</h5>
              <p>Smart algorithm analyzes and finds your best fit.</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="step-card p-4 shadow">
              <div className="icon mb-3">🎯</div>
              <h5>3. Get Recommendations</h5>
              <p>View personalized academic or career suggestions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
