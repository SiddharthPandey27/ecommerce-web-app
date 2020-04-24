import React from "react";
import { connect } from "react-redux";

import CustomButton from "../../elements/customButton/customButton";
import { addItemToCart } from "../../actions/cart.actions";

import "./styles.scss";

const CollectionItem = ({ item, addItemToCart }) => {
  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
      ></div>
      <div className="collection-item-footer">
        <div className="name">{item.name}</div>
        <div className="price">₹ {item.price * 10}</div>
      </div>
      <CustomButton
        isCartButton={true}
        onClick={() => addItemToCart(item)}
      >
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: item => {
      dispatch(addItemToCart(item));
    }
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
