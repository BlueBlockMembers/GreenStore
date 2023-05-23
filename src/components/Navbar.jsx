import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">

  <div className="navbar__left">
    <Link to="/" className="navbar__logo">Green Store</Link>
  </div>
  <ul className="navbar__right">
    <li className="navbar__item">
      <Link to="/" className="navbar__link">Home</Link>
    </li>
    <li className="navbar__item dropdown">
      <a href="#" className="navbar__link dropdown-toggle" data-toggle="dropdown">Seeds<span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><Link to="/seeds">View Seeds</Link></li>
        <li><Link to="/add-seeds">Add Seeds</Link></li>
      </ul>
    </li>
    <li className="navbar__item dropdown">
      <a href="#" className="navbar__link dropdown-toggle" data-toggle="dropdown">Vegetables<span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><Link to="/vegetables">View Vegetables</Link></li>
        <li><Link to="/add-vegetables">Add Vegetables</Link></li>
      </ul>
    </li>
    <li className="navbar__item dropdown">
      <a href="#" className="navbar__link dropdown-toggle" data-toggle="dropdown">Fertilizers<span className="caret"></span></a>
      <ul className="dropdown-menu">
        <li><Link to="/view">View Fertilizers</Link></li>
        <li><Link to="/add">Add Fertilizers</Link></li>
        <li><Link to="/report">Generate Fertilizer</Link></li>
      </ul>
    </li>
    <li className="navbar__item">
      <Link to="/login" className="navbar__link">Login</Link>
    </li>
    <li className="navbar__item">
      <Link to="/register" className="navbar__link">Register</Link>
    </li>
  </ul>
</nav>

  );
}

export default Navbar;
