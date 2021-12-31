import React from "react";
import cl from "./Modal.module.css";

const Modal = ({ visible, setVisible, sum }) => {
  const rootClasses = [cl.Modal];

  if (visible) {
    rootClasses.push(cl.active);
  }
  const submitForm = (event) => {
    event.preventDefault();
    setVisible(false);
  };

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={cl.ModalContent} onClick={(e) => e.stopPropagation()}>
        <form className="final-form">
          <label>Name:</label>
          <input type="text" name="name"></input>

          <label>Surname:</label>
          <input type="text" name="surname"></input>

          <label>Phone:</label>
          <input type="text" name="phone"></input>

          <label>Email:</label>
          <input type="email" name="email"></input>

          <label>Card number:</label>
          <input type="text" name="card"></input>

          <label>Address:</label>
          <input type="text" name="address"></input>
          <p>Total price={sum}$</p>
          <button onClick={submitForm} className="shopping-cart_item-button ">
            Buy
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
