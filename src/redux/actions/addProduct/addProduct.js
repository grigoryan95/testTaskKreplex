import {ADD_PRODUCT} from "../../actionTypes/actionsTypes";


export const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    };
};