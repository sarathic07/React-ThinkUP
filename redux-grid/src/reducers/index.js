import {combineReducers} from "redux";
import studReducer from "./studReducer";

const rootReducer = combineReducers({
    stud: studReducer
});

export default rootReducer;