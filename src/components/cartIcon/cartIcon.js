import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../actions/cart.actions";

import { ReactComponent as ShoppingBagLogo } from "../../img/svg/shopping-bag.svg";

import "./styles.scss";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBagLogo className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => {
    dispatch(toggleCartHidden());
  }
});

export default connect(null, mapDispatchToProps)(CartIcon);
