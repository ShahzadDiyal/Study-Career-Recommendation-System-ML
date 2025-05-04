import { Link } from "react-router-dom";
import "../css/GetRecommendation.css";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import { CheckCircle } from "lucide-react";

const basicFeatures = [
    "Quick Course Suggestions",
    "Minimal Input Required",
    "Predefined Subject List",
    "Suitable for Beginners",
    "Fast & Easy Access"
];


const advancedFeatures = [
    "AI-Based Learning Analysis",
    "Personalized Study Plans",
    "Career Goal Matching",
    "Skill Gap Identification",
    "Performance Optimization"
];


const GetRecommendation = () => {
    return (
        <>
            <Navbar2 />
            <div className="recommendation-container">
                <div className="card-wrapper">
                    <div className="recommendation-card">
                        <h3 style={{color:"white"}}>Basic Recommendation</h3>
                        <ul className="feature-list">
                            {basicFeatures.map((feature, i) => (
                                <li key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                                    <CheckCircle className="icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link className="recommendation-link" to="/recommendation-form">
                            Get Recommendations
                        </Link>
                    </div>

                    <div className="recommendation-card">
                        <h3 style={{color:"white"}}>Advanced Recommendation</h3>
                        <ul className="feature-list">
                            {advancedFeatures.map((feature, i) => (
                                <li key={i} style={{ animationDelay: `${i * 0.15}s` }}>
                                    <CheckCircle className="icon" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <Link className="recommendation-link" to="/get-better-recommendation">
                            Get Recommendations
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default GetRecommendation;
