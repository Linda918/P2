import { Link } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="nav-container">
      <ul className="nav-ul">
        <Link className="li" to="/">
          Inicio
        </Link>
        <Link className="li" to="/Nosotros">
          Nosotros
        </Link>
        <Link className="li" to="/Contact">
          Contacto
        </Link>
        <div className="li" onClick={handleMenuClick}>
          Categorías
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Anillos">Anillos</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Collares">Collares</Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/Category/Coronas">Coronas</Link>
          </MenuItem>
        </Menu>
      </ul>
    </nav>
  );
};

export default NavBar;