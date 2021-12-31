import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  CHANGE_NR,
} from "../actions/cartActions";

const initialState = {
  cartItems: [],
  message: "",
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("action.payloadADD:", action.payload);
      console.log(" action.payloadFIRST:", action.payload);
      console.log("action.payload.quantity:", action.payload.quantity);
      console.log("action.payload.price:", action.payload.price);
      console.log("action.payload.totalPrice:", action.payload.totalPrice);
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item.isbn13 !== action.payload;
        }),
      };
    case UPDATE_CART:
      const total = (
        parseFloat(action.payload.price) * parseFloat(action.payload.quantity)
      ).toFixed(2);
      console.log("total:", total);
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          const id = item.isbn13;

          if (id === action.payload.isbn13)
            return {
              ...item,
              totalPrice: total,
            };
          else return item;
        }),
      };

    case CHANGE_NR:
      const quant = action.payload.quantity;
      const newTotal = (
        parseFloat(action.payload.price) * parseFloat(quant)
      ).toFixed(2);

      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          const id = item.isbn13;
          if (id === action.payload.isbn13)
            return {
              ...item,
              quantity: quant,
              totalPrice: newTotal,
            };
          else return item;
        }),
      };
    default:
      return state;
  }
};

export default CartReducer;
