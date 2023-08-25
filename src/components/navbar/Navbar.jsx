import React from "react";
import "./navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import Services from "../services/Services";
import Experience from "../experience/Experience";
import Portfolio from "../portfolio/Portfolio";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">DWK</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to='Navbar'
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to='Services'
              smooth={true}
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to='Experience'
              smooth={true}
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to='Portfolio'
              smooth={true}
            >
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
