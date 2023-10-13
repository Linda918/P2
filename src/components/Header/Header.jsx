import img from "./logo.jpg";
import React from "react";
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={img} alt="logo-flor" width={80} />
      </Link>
      <h1>Mis violetas </h1>
      <h4>Joyería y accesorios</h4>
    </div>
  );
};

export default Header;