import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % 3);
        }, 9000);
        return () => clearInterval(interval);
    }, []);

    const handleHover = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <div className="slider-container">
            <div
                className={`slide ${activeIndex === 0 ? 'active' : 'inactive'}`}
                onMouseEnter={() => handleHover(0)}
            >
                {activeIndex === 0 && (
                    <div className="slide-content">
                        <p style={{ fontSize: "45px", marginBottom: "0px" }}>Discover the Study Path Meant for You</p>
                        <div className="row" style={{ margin: "0px", padding: "0px" }}>
                            <div className="col-md-6 align-content-center">
                                <ul style={{ alignItems: "center", lineHeight: "2" }}>
                                    <li>Personalized based on your strengths</li>
                                    <li>Matches passion with profession</li>
                                    <li>Builds a focused career path</li>
                                </ul>
                                <button className="get-started-btn">
                                    <Link to="/recommendation-form" style={{color:"black", fontWeight:"bold"}}>Get Started</Link>
                                </button>
                            </div>
                            <div className="col-md-6">
                                <img src="slide-1.png" alt="" style={{ width: "400px", height: "270px" }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div
                className={`slide ${activeIndex === 1 ? 'active' : 'inactive'}`}
                onMouseEnter={() => handleHover(1)}
            >
                {activeIndex === 1 && (
                    <div className="slide-content">
                        <p style={{ fontSize: "45px", marginBottom: "10px" }}>Smarter Study Choices by Intelligent Insights</p>
                        <div className="row" style={{ margin: "0px", padding: "0px" }}>
                            <div className="col-md-6 align-content-center">
                                <ul style={{ alignItems: "center", lineHeight: "2" }}>
                                    <li>Real-time career prediction</li>
                                    <li>AI-driven recommendation engine</li>
                                    <li>Explore new growing fields</li>
                                </ul>
                                <button className="get-started-btn">
                                    <Link to="/recommendation-form" style={{color:"black", fontWeight:"bold"}}>Get Started</Link>
                                </button>
                            </div>
                            <div className="col-md-6">
                                <img src="slide-2.png" alt="" style={{ width: "400px", height: "270px" }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div
                className={`slide ${activeIndex === 2 ? 'active' : 'inactive'}`}
                onMouseEnter={() => handleHover(2)}
            >
                {activeIndex === 2 && (
                    <div className="slide-content">
                        <p style={{ fontSize: "45px", marginBottom: "0px" }}>Plan with Confidence, Learn with Purpose</p>
                        <div className="row" style={{ margin: "0px", padding: "0px" }}>
                            <div className="col-md-6 align-content-center">
                                <ul style={{ alignItems: "center", lineHeight: "2" }}>
                                    <li>Data-backed decision making</li>
                                    <li>Clear career roadmap ahead</li>
                                    <li>Gain confidence through guidance</li>
                                </ul>
                                <button className="get-started-btn">
                                    <Link to="/recommendation-form" style={{color:"black", fontWeight:"bold"}}>Get Started</Link>
                                </button>
                            </div>
                            <div className="col-md-6">
                                <img src="slide-3.png" alt="" style={{ width: "400px", height: "300px" }} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
