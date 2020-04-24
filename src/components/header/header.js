import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase";

import { ReactComponent as Logo } from "../../img/svg/crown.svg";
import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "../cartDropdown/cartDropdown";

import "./header.scss";

const Header = ({ currentUser, cartHidden }) => {
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
        {currentUser ? (
          <div className="header-tab" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signIn" className="header-tab">
            Sign In
          </Link>
        )}
        <CartIcon />
      </div>
      {cartHidden ? "" : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  cartHidden: state.cart.cartHidden
});

export default connect(mapStateToProps, null)(Header);
