import changeTheNumber from "./updown";
import getTheBooks from "./getBooks";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeTheNumber,
        getTheBooks
    }
);

export default reducers;