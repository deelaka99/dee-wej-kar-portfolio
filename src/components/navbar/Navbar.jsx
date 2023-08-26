import React from "react";
import "./navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="n-wrapper" style={{backgroundColor:darkMode?"rgba(0, 0, 0, 0.8)":""}}>
      <div className="n-left">
        <div className="n-name">DWK</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Intro"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to="Experience" smooth={true}>
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>
          </ul>
        </div>
        <div className="btn-holder">
          <Link spy={true} to="Contact" smooth={true}>
            <button className="button n-button">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
