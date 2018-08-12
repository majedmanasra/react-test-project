import {combineReducers} from "redux";
import {reducer} from "redux-form";
import userReducer from "./userReducer";
import salesReducer from "./salesReducer";


export default combineReducers({
    form: reducer,
    user: userReducer,
    sales: salesReducer
})