import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from '../../img/svg/crown.svg';

import './header.scss';

const Header = props => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="header-menu">
        <Link to="/shop" className="header-tab">
          Shop
        </Link>
        <Link to="/contact" className="header-tab">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
