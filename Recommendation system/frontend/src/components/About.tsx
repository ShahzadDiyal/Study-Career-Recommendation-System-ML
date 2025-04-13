

const About = () => {
  return (
    <div className="d-flex justify-content-center " style={{ paddingTop: "20px", backgroundColor: "background: linear-gradient(90deg, #384ef4, #b060ed);" }}>
      <div className="about-section text-center">
        <h3 className="text-white">About</h3>
        <div className="row">
        <div className="col-4 text-end align-content-center">
            <img src="about.png" alt="" style={{ width: "300px",marginBottom:"10px" }} />
          </div>
          <div className="col-8 align-content-center">
            <p className="text-white text-start">Our Study Recommendation System helps students identify the most suitable academic or career path based on their interests, strengths, and preferences. It solves the common confusion faced when choosing a field of study by providing personalized, AI-powered guidance—ensuring better decisions and a clearer direction for future success.</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About;