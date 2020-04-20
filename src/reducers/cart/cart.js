import { TOGGLE_CART_DROPDOWN } from "../../actionTypes/actionTypes";

const initialState = {
  cartHidden: true
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    default:
      return state;
  }
};

export default cartReducer;
