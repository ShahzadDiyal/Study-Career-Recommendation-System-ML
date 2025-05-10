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
            <li className='benefits-list-items'>Personalized Study Path</li>
            <li className='benefits-list-items'>AI-Powered Insights</li>
            <li className='benefits-list-items'>Saves Time and Confusion</li>
            <li className='benefits-list-items'>Boosts Academic Confidence</li>
            <li className='benefits-list-items'>Career-Oriented Planning</li>
            <li className='benefits-list-items'>Improves Decision-Making Skills</li>
            <li className='benefits-list-items'>Adapts to Changing Interests</li>
            <li className='benefits-list-items'>User-Friendly and Accessible</li>
            <li className='benefits-list-items'>Early Guidance for Better Outcomes</li>
            <li className='benefits-list-items'>Encourages Self-Discovery</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
