import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const Reducers = combineReducers({
  isLogged: isLoggedReducer,
  //We can add as many reducers here to combine all reducers into one
});
export default Reducers;
