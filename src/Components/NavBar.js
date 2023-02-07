import React from "react";
import "../onboarding/onboarding.css";
import Logo from "../Images/sacha.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <div className="logo-box">
          <img src={Logo} alt="logo" />
        </div>
        <p>Sacha</p>
      </div>

      <div className="nav-links">
        <Link path to="" className="nav-link">Features</Link>
        <Link path to="" className="nav-link">Pricing</Link>
        <Link path to="" className="nav-link">About us</Link>
      </div>

      <div className="nav-btns">
        <input type="submit" value="Sign up" className="sign-up-btn"/>
        <input type="submit" value="Log in" className="log-in-btn"/>
      </div>
    </div>
    
  );
};

export default NavBar;
