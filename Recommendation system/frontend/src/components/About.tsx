import '../css/about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section text-center">
        <h3 className="text-white">About</h3>
        <div className="row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <p className="text-white about-text">
              Our Study Recommendation System helps students identify the most suitable academic or career path based on their interests, strengths, and preferences. It solves the common confusion faced when choosing a field of study by providing personalized, AI-powered guidance—ensuring better decisions and a clearer direction for future success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
