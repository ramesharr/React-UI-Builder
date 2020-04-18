import { combineReducers } from "redux";
import { Components } from "./componentsReducer";
import { Board } from "./boardReducer";

const RootReducer = combineReducers({ Components, Board });

export default RootReducer;
