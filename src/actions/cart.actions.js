import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from "../actionTypes/actionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItemToCart = item => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};
