import React, { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const login = () => {
    setBtnName((prevBtnName) => (prevBtnName === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
          <li>
            <Link to="contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={login}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
