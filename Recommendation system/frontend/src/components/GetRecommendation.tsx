import { Link } from "react-router-dom";
import "../css/GetRecommendation.css"; // Make sure to create and import the CSS file

const GetRecommendation = () => {
    return (
        <div className="recommendation-container">
            <div className="card-wrapper">
                <div className="recommendation-card">
                    <h3>Simple Recommendation</h3>
                    <Link className="recommendation-link" to="/recommendation-form">
                        Get Recommendations
                    </Link>
                </div>
                <div className="recommendation-card">
                    <h3>For Better Recommendations</h3>
                    <Link className="recommendation-link" to="/get-better-recommendation">
                        Get Recommendations
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GetRecommendation;
