import {combineReducers, createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {registerAndLogin} from "./users";
import {products} from "./products";

export const state = createStore(combineReducers({
    registerAndLogin,
    products
}), applyMiddleware(thunk));