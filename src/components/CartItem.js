import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, changeItem } from "../actions/cartActions";

const CartItem = ({ itemId }) => {
  const { cartItems } = useSelector((state) => state);

  const dispatch = useDispatch();
  const foundItem = cartItems.find((item) => {
    return item.isbn13 === itemId.isbn13;
  });
  const dispatchRemoveItem = () => {
    dispatch(removeItem(foundItem.isbn13));
  };

  const increaseQuantity = () => {
    foundItem.quantity = foundItem.quantity + 1;
    dispatch(changeItem(foundItem));
  };
  const decreaseQuantity = () => {
    foundItem.quantity = foundItem.quantity - 1;
    if (foundItem.quantity === 0) {
      dispatch(removeItem(foundItem.isbn13));
    } else dispatch(changeItem(foundItem));
  };

  return (
    <div className="shopping-cart_item">
      {foundItem ? (
        <>
          <img
            src={foundItem.image}
            className="shopping-cart_item-img"
            alt="item"
          />

          <div className="cart-wrapper">
            <h3 className="shopping-cart__title"> {foundItem.title}</h3>
            <div className="cart_prices">
              <p>{foundItem.price} $</p>
              <div className="quantity_container">
                <p>Quantity:</p>
                <div className="quantity_buttons">
                  <button className="add_button" onClick={increaseQuantity}>
                    +
                  </button>
                  <p>{foundItem.quantity} </p>
                  <button className="add_button" onClick={decreaseQuantity}>
                    -
                  </button>
                </div>
              </div>
              <p>totalPrice:{foundItem.totalPrice} $</p>
              <button
                className="shopping-cart_item-button"
                onClick={dispatchRemoveItem}
              >
                Remove
              </button>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CartItem;
