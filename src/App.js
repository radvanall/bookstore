import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Items from "./pages/Items";
import Item from "./pages/Item";
import ShoppingCart from "./pages/ShoppingCart";
import Home from "./pages/Home";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const updatePage = (newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    axios(`https://api.itbook.store/1.0/search/react/${page}`).then(
      (response) => {
        setBooks(response.data.books);
      }
    );
  }, [page]);
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/shopping-cart">
          <ShoppingCart books={books} />
        </Route>
        <Route path="/items">
          <Items books={books} updatePage={updatePage} />
        </Route>
        <Route path="/item/:id">
          <Item books={books} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
