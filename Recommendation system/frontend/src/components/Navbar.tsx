import { Link } from "react-router-dom"
import '../css/navbar.css'


const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="/shahzad.png" alt="" style={{ width: "20px", height: "20px", marginRight: "200px" }} />
      <div>
        <ul className="list-unstyle">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/recommendation-form">Get Reommendation</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar