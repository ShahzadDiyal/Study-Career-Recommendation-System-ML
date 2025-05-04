import "../css/navbar.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{ width: "1200px"}}>
      <img
        className="logo"
        src="/shahzad.png"
        alt=""
        style={{ width: "20px", height: "20px", marginRight: "200px" }}
      />
      <div>
        <ul className="list-unstyle">
         <Link to="/">
         <li className="menu-item">
              Home
          </li></Link>
          <Link to="/about">
          <li className="menu-item">
              About
          </li>
          </Link>
          <Link to="/how-it-works">
          <li className="menu-item">
              How It Works
          </li>
          </Link>
        
         
         
          <Link to="/get-recommendation">
            <li className="menu-item">Get Recommendation</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
