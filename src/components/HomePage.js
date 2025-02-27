import React from "react";
import "./HomePage.css";
import homeImage from "../images/home.jpeg"
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="logo">CarGurus</div>
        <ul className="nav-links">
          <li>Buy</li>
          <li>Sell</li>
          <li>Finance</li>
          <li>Research</li>
          <li><Link className="mostwanted" to="/mostwanted">Most Wanted Cars</Link></li>
        </ul>
        <Link className="sign-in" to="/signup">Sign up</Link>
      </nav>

      <header className="hero" style={{ backgroundImage: `url(${homeImage})` }}>
        <h1>Car shopping your way</h1>
        <div className="search-box">
          <button className="toggle-btn active">Buy</button>
          <button className="toggle-btn">Sell/Trade</button>
          <div className="filters">
            <select>
              <option>Used</option>
              <option>New</option>
            </select>
            <select>
              <option>All makes</option>
            </select>
            <select>
              <option>All models</option>
            </select>
            <input type="text" placeholder="ZIP code" />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </header>

      <footer className="footer">
        <p>* * * * * on Google Play</p>
        <p>15+ years of trust</p>
      </footer>
    </div>
  );
};

export default HomePage;
