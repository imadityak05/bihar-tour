import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { places } from "../../data/places"; // List of places
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value.trim();
    setSearch(value);
    if (!value) {
      setResults([]);
      return;
    }
    const filtered = places.filter((place) =>
      place.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };
  
  const handleResultClick = (path) => {
    navigate(path);
    setSearch("");
    setResults([]);
    setMenuOpen(false);
  };
  
  return (
    <header className="navbar">
      <nav className="nav-container">
        <div className="logo"> IncredibleBihar</div> {/* 👈 Bihar Title/Logo */}

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>

          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>

          <a
            href="https://state.bihar.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>

          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={() => setMenuOpen(false)}
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
            onClick={() => setMenuOpen(false)}
          >
            Contacts
          </NavLink>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search places..."
              value={search}
              onChange={handleSearch}
              className="search-input"
            />
            {results.length > 0 && (
              <div className="search-results">
                {results.map((place) => (
                  <div
                    key={place.name}
                    className="search-result"
                    onClick={() => handleResultClick(place.path)}
                  >
                    {place.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
