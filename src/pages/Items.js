import React, { useState } from "react";
import { Link } from "react-router-dom";

const Items = ({ books, updatePage }) => {
  const [btnClass, setBtnClass] = useState(1);
  const changePage = (page) => {
    updatePage(page);
    setBtnClass(page);
  };
  const goBack = () => {
    if (btnClass === 1) {
      setBtnClass(btnClass);
    } else {
      setBtnClass(btnClass - 1);
      updatePage(btnClass - 1);
    }
  };

  const goForward = () => {
    if (btnClass === 10) {
      setBtnClass(btnClass);
    } else {
      setBtnClass(btnClass + 1);
      updatePage(btnClass + 1);
    }
  };
  let pagesArray = [];
  for (let i = 0; i < 10; i++) {
    pagesArray.push(i + 1);
  }
  return (
    <div className="items-page">
      <div className="items-list-wrapper">
        {books.map((book) => {
          return (
            <div key={book.isbn13} className="item-card">
              <Link to={`/item/${book.isbn13}`}>
                <img src={book.image} alt="" className="items-list-image" />
              </Link>
              <p>{book.price}</p>
            </div>
          );
        })}
      </div>
      <div className="page_buttons">
        <button className="page_button" onClick={goBack}>
          {"<"}
        </button>

        {pagesArray.map((p) => (
          <button
            className={
              p === btnClass ? "page_button page__current" : "page_button"
            }
            onClick={() => changePage(p)}
          >
            {p}
          </button>
        ))}

        <button className="page_button" onClick={goForward}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Items;
