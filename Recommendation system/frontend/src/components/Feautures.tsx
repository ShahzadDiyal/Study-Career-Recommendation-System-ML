const Feautures = () => {

    return (
        <div style={{ padding: "50px", background: "#040023", borderRadius: "20px", marginTop: "20px", justifyItems: "center" }}>
            <p className="heading">Key Features</p>
            <p style={{
                width: "1000px",
                alignContent: "center",
                color: "white",
                textAlign: "center"
            }}>Personalized learning paths, intelligent course suggestions, progress tracking, adaptive algorithms, content relevance, student insights, real-time feedback, and seamless integration.  </p>

            <div className="row">
                <div className="col-4">
                    <div className="card text-center">
                        <img src="generative.png" alt="" />
                        AI/ML-based recommendations</div></div>
                <div className="col-4">
                    <div className="card text-center">
                        <img src="question.png" alt="" />
                        Personalized suggestions</div></div>
                <div className="col-4">


                    <div className="card text-center">
                        <img src="tap.png" alt="" />
                        Easy-to-use interface</div></div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="card text-center">
                        <img src="review.png" alt="" />
                        Real-time feedback or scoring</div></div>
                <div className="col-4">
                    <div className="card text-center">
                        <img src="progress-tracking.png" alt="" />
                        Progress Tracking & Analytics</div></div>
                <div className="col-4">
                    <div className="card text-center">
                        <img src="calendar.png" alt="" />
                        Smart Scheduling & Reminders</div></div></div>
        </div>
    )
}

export default Feautures