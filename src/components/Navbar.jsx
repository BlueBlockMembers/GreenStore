import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleLogout = () => {
    // Perform logout logic here
    // Example: Clear authentication token, reset user state, etc.
    localStorage.removeItem('token'); // Remove authentication token from localStorage
    // Reset any user-related state or perform additional logout actions

    navigate('/'); // Navigate to the homepage or any desired route after logout
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <Link to="/" className="navbar__logo">Green Store</Link>
      </div>
      <ul className="navbar__right">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Home</Link>
        </li>
        <li
          className={`navbar__item dropdown ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <button className="navbar__link dropdown-toggle">
            Seeds
            <span className="caret"></span>
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to="/seeds">View Seeds</Link></li>
            <li><Link to="/add-seeds">Add Seeds</Link></li>
          </ul>
        </li>
        <li
          className={`navbar__item dropdown ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <button className="navbar__link dropdown-toggle">
            Vegetables
            <span className="caret"></span>
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to="/vegetables">View Vegetables</Link></li>
            <li><Link to="/add-vegetables">Add Vegetables</Link></li>
          </ul>
        </li>
        <li
          className={`navbar__item dropdown ${isDropdownOpen ? 'open' : ''}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <button className="navbar__link dropdown-toggle">
            Fertilizers
            <span className="caret"></span>
          </button>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><Link to="/view">View Fertilizers</Link></li>
            <li><Link to="/add">Add Fertilizers</Link></li>
            <li><Link to="/report">Generate Fertilizer</Link></li>
          </ul>
        </li>
        <li className="navbar__item">
          <Link to="/" className="navbar__link">Login</Link>
        </li>
        <li className="navbar__item">
          <Link to="/register" className="navbar__link">Register</Link>
        </li>
        <li className="navbar__item">
          <button className="navbar__link" onClick={handleCartClick}>
            <FaShoppingCart />
          </button>
        </li>
        <li className="navbar__item">
          <button className="navbar__link" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
