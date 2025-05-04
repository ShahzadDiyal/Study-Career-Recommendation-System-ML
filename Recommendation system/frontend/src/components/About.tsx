import '../css/about.css'

const About = () => {
  return (
    <div 
      className="d-flex justify-content-center" 
      style={{ paddingTop: "20px", background: "linear-gradient(90deg, #1a1a40, #3b0a2c);" }}
    >
      <div className="about-section text-center">
        <h3 className="text-white">About</h3>
        <div className="row">
          <div className="col-12 col-md-4 text-end d-flex align-items-center justify-content-center">
            <img src="about.png" alt="About" className="about-image" />
          </div>
          <div className="col-12 col-md-8 d-flex align-items-center">
            <p className="text-white text-start about-text">
              Our Study Recommendation System helps students identify the most suitable academic or career path based on their interests, strengths, and preferences. It solves the common confusion faced when choosing a field of study by providing personalized, AI-powered guidance—ensuring better decisions and a clearer direction for future success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
