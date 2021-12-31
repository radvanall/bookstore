export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_CART = "UPDATE_CART";
export const CHANGE_NR = "CHANGE_NR";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeItem = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const updateItem = (changedItem) => {
  return {
    type: UPDATE_CART,
    payload: changedItem,
  };
};
export const changeItem = (changedItem) => {
  return {
    type: CHANGE_NR,
    payload: changedItem,
  };
};
