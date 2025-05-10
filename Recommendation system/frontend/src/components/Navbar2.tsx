import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/navbar2.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Refs for menu and hamburger button
  const menuRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

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
  const handleClickOutside = (event: MouseEvent) => {
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
        alt=""
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
        <Link to="/" onClick={handleMenuItemClick}>
          <li className="menu-item">Home</li>
        </Link>
        {/* <Link to="/about" onClick={handleMenuItemClick}>
          <li className="menu-item">About</li>
        </Link> */}
        <Link to="/how-it-works" onClick={handleMenuItemClick}>
          <li className="menu-item">How It Works</li>
        </Link>
        <Link to="/get-recommendation" onClick={handleMenuItemClick}>
          <li className="menu-item">Get Recommendation</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
