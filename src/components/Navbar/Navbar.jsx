import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import menuIcon from "../../assets/images/icon-menu-small.png";
import "./navbar.css";
import Collapsed from "../Collapsed/Collapsed";

function Navbar() {
  const [activeText, setActiveText] = useState("Home");
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isCrossShow, setIsCrossShow] = useState(false);

  const handleTextClick = (navElenName) => {
    setActiveText(navElenName);
  };

  //handing collapse
  function handleNavCollapse() {
    setIsCrossShow(!isCrossShow);
    setIsNavCollapsed(!isNavCollapsed);
  }

  return (
    <header className=" header-section">
      <nav className="container navbar-section">
        <Link to="/">
          {" "}
          <div
            style={{ color: "white" }}
            onClick={() => handleTextClick("Home")}
            className="brand-name"
          >
            <span className="my-name">Shiwangi</span>
          </div>
        </Link>
        <div className="menu-bar">
          <Link
            to="/"
            className={`buttons ${
              activeText === "Home" ? "active-text" : "menu-content"
            }`}
            onClick={() => handleTextClick("About")}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`buttons ${
              activeText === "About" ? "active-text" : "menu-content"
            }`}
            onClick={() => handleTextClick("About")}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`buttons ${
              activeText === "Projects" ? "active-text" : "menu-content"
            }`}
            onClick={() => handleTextClick("Projects")}
          >
            Projects
          </Link>
          <Link
            to="/experience"
            className={`buttons ${
              activeText === "Experience" ? "active-text" : "menu-content"
            }`}
            onClick={() => handleTextClick("Experience")}
          >
            Experience
          </Link>
          <Link
            to="/contact"
            className={`buttons ${
              activeText === "Contact" ? "active-text" : "menu-content"
            }`}
            onClick={() => handleTextClick("Contact")}
          >
            Contact
          </Link>
        </div>
        <div onClick={handleNavCollapse} className="menu-icon hide-menu">
          <img height="32px" src={menuIcon} alt="menu-icon" />
        </div>
      </nav>
      {isNavCollapsed && <Collapsed operation={handleNavCollapse} />}
    </header>
  );
}

export default Navbar;
