const Benefits = () => {
    return (
        <div style={{ padding: "50px", background: "linear-gradient(45deg, #0a8b1f, #4a47ff)", borderRadius: "20px", marginTop: "20px", justifyItems: "center" }}>
            <p className="heading">Key Benefits</p>
            <div className="row">
                <div className="col-5 align-content-center">
                    <div className="me-2">
                    <img src="incentive.png" alt="" width={300}/>

                    </div>
                </div>
                <div className="col-7 align-content-center">
                    <div className="benefits-right-section align-co">
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

        </div>
    )
}

export default Benefits