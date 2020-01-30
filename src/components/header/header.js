import React from "react";
import { Link } from "react-router-dom";

import { auth } from '../../firebase/firebase';

import { ReactComponent as Logo } from '../../img/svg/crown.svg';

import './header.scss';

const Header = ({ currentUser }) => {
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
        {
          currentUser
            ?
              (<div className="header-tab" onClick={() => auth.signOut()}>
                Sign Out
              </div>)
            :
              (<Link to="/signin" className="header-tab">
                Sign In
              </Link>)
          }
      </div>
    </div>
  );
};

export default Header;
