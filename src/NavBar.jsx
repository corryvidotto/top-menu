// NavBar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/abc" className="navbar-link">ABC</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cde" className="navbar-link">CDE</Link>
        </li>
        <li className="navbar-item">
          <Link to="/fgh" className="navbar-link">FGH</Link>
        </li>
        <li className="navbar-item">
          <Link to="/ijk" className="navbar-link">IJK</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;