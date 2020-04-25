import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../elements/customButton/customButton";
import CartItem from "../cartItem/cartItem";

import "./styles.scss";

const CartDropdown = (props) => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.length > 0
          ? cartItems.map(item => <CartItem key={item.id} item={item} />)
          : ""}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default connect(mapStateToProps, null)(CartDropdown);
