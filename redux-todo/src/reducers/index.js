import {combineReducers} from "redux";
import todoReducer from "./todoReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    todo: todoReducer, //whenever add new reducer include here
    filter: filterReducer
});

export default rootReducer;