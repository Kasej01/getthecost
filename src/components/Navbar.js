import React, { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
    <div id="navbar-container">
        <h2 id="app-name">Get The Cost</h2>
        <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
        >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
        </button>
        <ul className={`navbar-items-container${menuOpen ? ' open' : ''}`}>
            <li className="navbar-item">
                <a href="/mortgage-calculator">Mortgage Calculator</a>
            </li>
            <li className="navbar-item">
                <a href="/loan-calculator">Loan Calculator</a>
            </li>
            <li className="navbar-item">
                <a href="/taxes-calculator">Taxes Calculator</a>
            </li>
        </ul>
    </div>
    )
}