import { Link as ScrollLink } from "react-scroll";
import "../css/navbar.css";


import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="/shahzad.png"
        alt=""
        style={{ width: "20px", height: "20px", marginRight: "200px" }}
      />
      <div>
        <ul className="list-unstyle">
          <li className="menu-item">
            <ScrollLink to="home" smooth={true} duration={50}>
              Home
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="about" smooth={true} duration={50}>
              About
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="howitwork" smooth={true} duration={50}>
              How It Works
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="benefits" smooth={true} duration={50}>
              Benefits
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="features" smooth={true} duration={50}>
              Features
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="team" smooth={true} duration={50}>
              Team
            </ScrollLink>
          </li>
          <Link to="/get-recommendation">
            <li className="menu-item">Get Recommendation</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
