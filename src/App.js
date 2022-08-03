import React from "react";
import axios from "axios";
import "./App.css";
import { incNumber } from "./actions";
import { decNumber } from "./actions";
import { getBooks } from "./actions";

import { useSelector, useDispatch } from "react-redux";

const App = () => {
  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  //getting state values
  const books = useSelector((state) => state.getTheBooks);

  console.log(books, "books in app.js");

  const dispatch = useDispatch();

  React.useEffect(() => {
    getBooksApi();
  }, []);

  const getBooksApi = async () => {
    const books = axios
      .get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
      .then((res) => {
        console.log(res.data.result);
        dispatch(getBooks(res.data.result));
      });
  };

  return (
    <>
      <div className="main-div">
        <div class="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div class="quantity">
            <a class="quantity__minus" title="Decrement" onClick={() => dispatch(decNumber())}>
              <span>-</span>
            </a>
            <input name="quantity" type="text" class="quantity__input" value={changeTheNumber} />
            <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(5))}>
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
