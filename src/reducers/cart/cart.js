import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from "../../actionTypes/actionTypes";
import { addItemToCart } from "../../utils/utils";

const initialState = {
  cartHidden: true,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
