import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/slider.css';

const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto slide every 9 seconds
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
                        <p className="slide-heading">Discover the Study Path Meant for You</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="benefits-list">
                                    <li><span className="check-icon"></span> Personalized based on your strengths</li>
                                    <li><span className="check-icon"></span> Matches passion with profession</li>
                                    <li><span className="check-icon"></span> Builds a focused career path</li>
                                </ul>
                                <button className="get-started-btn">
                                    <Link to="/get-recommendation">Get Recommendation</Link>
                                </button>
                            </div>
                            <div className="col-md-6">
                                <img src="slide-1.png" alt="slide 1" className="slide-image" />
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
                        <p className="slide-heading">Smarter Study Choices by Intelligent Insights</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="benefits-list">
                                    <li><span className="check-icon"></span> Real-time career prediction</li>
                                    <li><span className="check-icon"></span> AI-driven recommendation engine</li>
                                    <li><span className="check-icon"></span> Explore new growing fields</li>
                                </ul>
                                <button className="get-started-btn">
                                    <Link to="/get-recommendation">Get Recommendation</Link>
                                </button>
                            </div>
                            <div className="col-md-6">
                                <img src="slide-2.png" alt="slide 2" className="slide-image" />
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
                        <p className="slide-heading">Plan with Confidence, Learn with Purpose</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="benefits-list">
                                    <li><span className="check-icon"></span> Data-backed decision making</li>
                                    <li><span className="check-icon"></span> Clear career roadmap ahead</li>
                                    <li><span className="check-icon"></span> Gain confidence through guidance</li>
                                </ul>
                                <button className="get-started-btn">
                                    <Link to="/get-recommendation">Get Recommendation</Link>
                                </button>
                            </div>
                            <div className="col-md-6">
                                <img src="slide-3.png" alt="slide 3" className="slide-image" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slider;
