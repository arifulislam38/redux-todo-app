import { combineReducers } from "redux";
import { filterReducer } from "./Filter/Reducer";
import todoReducer from "./Todo/Reducer";
export const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filterReducer,
});
