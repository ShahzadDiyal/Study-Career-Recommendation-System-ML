import { useState, useEffect, useRef } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "../css/navbar.css";

// Define types for refs to ensure proper typing
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Use proper types for refs
  const menuRef = useRef<HTMLUListElement | null>(null); // Menu ref with HTMLUListElement type
  const hamburgerRef = useRef<HTMLDivElement | null>(null); // Hamburger ref with HTMLDivElement type

  // Toggle the menu open/close when hamburger is clicked
  const handleMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen); // Toggle the menu state
  };

  // Close the menu when a menu item is clicked on mobile
  const handleMenuItemClick = () => {
    if (window.innerWidth <= 992) {
      setMenuOpen(false); // Close the menu on small screens
    }
  };

  // Close the menu when clicking outside of it
  const handleClickOutside = (event: MouseEvent) => { // Explicitly type the event
    // Check if the click is outside both the menu and the hamburger button
    if (
      menuRef.current && 
      !menuRef.current.contains(event.target as Node) && // Type assertion to Node
      hamburgerRef.current &&
      !hamburgerRef.current.contains(event.target as Node) // Type assertion to Node
    ) {
      setMenuOpen(false); // Close the menu if clicked outside
    }
  };

  // Set up event listener to detect clicks outside of the menu
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside); // Clean up the event listener
    };
  }, []);

  return (
    <div className="navbar">
      <img
        className="logo"
        src="/shahzad.png"
        alt="logo"
        style={{ width: "20px", height: "20px", marginRight: "200px" }}
      />
      <div
        className="hamburger"
        onClick={handleMenuToggle}
        ref={hamburgerRef} // Attach the hamburger ref
      >
        &#9776;
      </div>
      <ul
        className={`list-unstyle ${menuOpen ? "menu-open" : ""}`}
        ref={menuRef} // Attach the menu ref
      >
        <li className="menu-item" onClick={handleMenuItemClick}>
          <ScrollLink to="home" smooth={true} duration={50}>
            Home
          </ScrollLink>
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <ScrollLink to="about" smooth={true} duration={50}>
            About
          </ScrollLink>
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <ScrollLink to="howitwork" smooth={true} duration={50}>
            How It Works
          </ScrollLink>
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <ScrollLink to="benefits" smooth={true} duration={50}>
            Benefits
          </ScrollLink>
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <ScrollLink to="features" smooth={true} duration={50}>
            Features
          </ScrollLink>
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <ScrollLink to="team" smooth={true} duration={50}>
            Team
          </ScrollLink>
        </li>
        <li className="menu-item" onClick={handleMenuItemClick}>
          <Link to="/get-recommendation">Get Recommendation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
