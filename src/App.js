import React from "react";
import axios from "axios";
import "./App.css";
import { incNumber } from "./store/actions/index";
import { decNumber } from "./store/actions/index";
import { getBooks } from "./store/actions/index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  //getting number value
  const changeTheNumber = useSelector((state) => state.changeTheNumber);

  //getting state values
  const books = useSelector((book) => book);

  //creating dispact to call action method
  const dispatch = useDispatch();

  React.useEffect(() => {
    getBooksApi();
  }, []);

  const getBooksApi = async () => {
    const books = axios
      .get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book")
      .then((res) => {
        dispatch(getBooks(res.data.data));
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
            <a class="quantity__plus" title="Increment" onClick={() => dispatch(incNumber(10))}>
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
