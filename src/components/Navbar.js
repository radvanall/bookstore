import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { cartItems } = useSelector((state) => state);
  const totalItems = cartItems.reduce((acc, curr) => {
    return parseInt(acc) + parseInt(curr.quantity);
  }, 0);

  return (
    <div className="navigation">
      <div>
        <h1 className="store-header">Bookstore</h1>
      </div>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/items">Items</NavLink>
        <NavLink to="/shopping-cart">
          Cart
          <span>{totalItems}</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
