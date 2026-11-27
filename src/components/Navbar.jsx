import React, { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="ExploreWorld home">
        <span className="brand-mark">✳</span>
        <span>explore<span className="brand-light">world</span><small>TRAVEL WITH PURPOSE</small></span>
      </a>
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>☰</button>
      <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
        <a href="#destinations" onClick={() => setMenuOpen(false)}>Destinations</a>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)} aria-expanded={dropdownOpen}>
            Travel styles <span className={`chevron ${dropdownOpen ? "rotated" : ""}`}>⌄</span>
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <a href="#destinations" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Island escapes <span>↗</span></a>
              <a href="#destinations" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Mountain adventures <span>↗</span></a>
              <a href="#destinations" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Coastal getaways <span>↗</span></a>
            </div>
          )}
        </div>
        <a href="#about">Our story</a>
        <a className="nav-contact" href="mailto:hello@exploreworld.example">Let's talk <span>↗</span></a>
      </nav>
    </header>
  );
}

export default Navbar;