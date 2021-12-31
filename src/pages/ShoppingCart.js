import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

const ShoppingCart = ({ books }) => {
  const { cartItems } = useSelector((state) => state);

  const cartSum = cartItems
    .reduce((acc, curr) => {
      return parseFloat(acc) + parseFloat(curr.totalPrice);
    }, 0)
    .toFixed(2);

  const [modal, setModal] = useState(false);

  return (
    <div className="shopping-cart">
      <Modal visible={modal} setVisible={setModal} sum={cartSum} />
      {cartItems.map((item) => {
        return <CartItem key={item.isbn13} itemId={item} books={books} />;
      })}
      <div className="shopping-cart__checkout ">
        <p>Total:{cartSum} $</p>
        <button
          className="shopping-cart_item-button"
          onClick={() => setModal(true)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
