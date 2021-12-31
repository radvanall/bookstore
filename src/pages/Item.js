import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateItem } from "../actions/cartActions";
import { useHistory } from "react-router-dom";

const Item = ({ books }) => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state);

  const item = books.find((book) => {
    return book.isbn13 === params.id;
  });

  const dispatchAddItem = () => {
    const newItem = cartItems.find((element) => {
      return item.isbn13 === element.isbn13;
    });

    const nextItem = books.find((element) => {
      return element.isbn13 === item.isbn13;
    });

    if (newItem) {
      newItem.quantity = newItem.quantity + 1;

      return dispatch(updateItem(newItem));
    } else {
      nextItem.quantity = 1;
      nextItem.totalPrice = nextItem.price.split("$").find((el) => {
        return el;
      });
      nextItem.price = nextItem.price.split("$").find((el) => {
        return el;
      });
      return dispatch(addToCart(nextItem));
    }
  };

  return (
    <>
      {item ? (
        <div className="product_wrapper">
          <div className="button_product_wrapper">
            <button onClick={() => history.goBack()} className="product-button">
              {"<<"} Go back
            </button>
            <button
              onClick={() => history.push("/shopping-cart")}
              className="product-button"
            >
              Go forward {">>"}
            </button>
          </div>
          <div className="product">
            <h1>{item.title}</h1>
            <img src={item.image} className="product-img" alt="product" />
            <a href={item.url}>{item.url}</a>
            <h1>{item.subtitle}</h1>
            <h3>{item.price}</h3>
            <button onClick={dispatchAddItem} className="product-button">
              Add to cart
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Item;
