import { Link } from "react-router-dom"
import '../css/footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
      <div className="col-md-8">
        <ul className="footer-menu">
          <li><Link to="/contact">Privacy & Policy</Link></li>
          <li><Link to="/about">Terms & Conditions</Link></li>
          <li><Link to="/blog">Support</Link></li>
        </ul>
      </div>
      <div className="col-md-4">
        <ul className="footer-menu">
          <li><a href="https://www.facebook.com/profile.php?id=61572242984709">Facebook</a></li>
          <li><a href="https://www.linkedin.com/in/muhammad-shahzad-1b236b247/">LinkedIn</a></li>
          <li><a href="https://github.com/ShahzadDiyal">Github</a></li>
        </ul>
      </div>
      </div>
      
    </div>
  )
}

export default Footer