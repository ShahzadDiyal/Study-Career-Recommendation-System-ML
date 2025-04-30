import '../css/howitworks.css'


const HowItWork = () => {
  return (
    <div className="d-flex justify-content-center " style={{ paddingTop: "20px", backgroundColor: "background: linear-gradient(90deg, #384ef4, #b060ed);" }}>
    <div className="howitwork-section text-center">
      <h3 className="text-white">How It Work!</h3>
      <div className="row">
      <div className="col-md-4">
      <div className="step-card p-4 rounded shadow">
        <div className="icon display-4 mb-3">📝</div>
        <h5 className="text-white">1. Enter Preferences</h5>
        <p className="text-white">Fill in your interests, strengths, and goals.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="step-card p-4 rounded shadow">
        <div className="icon display-4 mb-3">🤖</div>
        <h5 className="text-white">2. AI Analysis</h5>
        <p className="text-white">Smart algorithm analyzes and finds your best fit.</p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="step-card p-4 rounded shadow">
        <div className="icon display-4 mb-3">🎯</div>
        <h5 className="text-white">3. Get Recommendations</h5>
        <p className="text-white">View personalized academic or career suggestions.</p>
      </div>
    </div>
      </div>
    </div>
  </div>
  )
}

export default HowItWork