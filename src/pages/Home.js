import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();

  const routeToItems = () => {
    history.push("/items");
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1475074389/kdhjwiu8pgcmmewm98nn/at26-panta-rhei-cafe-dias-bookstore-cafe.jpg"
        alt="poster-book-store"
      />

      <button className="shop-button md-button" onClick={routeToItems}>
        Shop Now
      </button>
    </div>
  );
};

export default Home;
