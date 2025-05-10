import { Link } from "react-router-dom";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <ul className="footer-menu">
          <li><Link to="/privacy-policy">Privacy & Policy</Link></li>
          <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          <li><Link to="/contact">ContactUS</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><a href="https://www.facebook.com/profile.php?id=61572242984709" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.linkedin.com/in/muhammad-shahzad-1b236b247/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href="https://github.com/ShahzadDiyal" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
