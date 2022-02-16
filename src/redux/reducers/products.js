import React from "react";
import {ADD_PRODUCT} from "../actionTypes/actionsTypes";


const initialState = {
    myProducts: [
        {name: 'Samsung', model: 'Galaxsi 5', price: '200', color: 'Black'},
        {name: 'Samsung', model: 'Galaxsi 6', price: '300', color: 'Red'},
        {name: 'Samsung', model: 'Galaxsi 7', price: '400', color: 'Blue'},
        {name: 'Samsung', model: 'Galaxsi 8', price: '500', color: 'Yellow'},
    ],
    allProducts: [
        {name: 'Nokia', model: '88-00', price: '100', color: 'White'},
        {name: 'Samsung', model: 'Galaxsi 5', price: '200', color: 'Black'},
        {name: 'Iphone', model: '12-Plus', price: '300', color: 'Gold'},
        {name: 'Sony', model: 'Version 5', price: '400', color: 'Gray'},
        {name: 'Motorola', model: 'V3', price: '500', color: 'Blue'},
        {name: 'Nokia', model: 'Sirroco', price: '600', color: 'Red'},
        {name: 'Iphone', model: '10-mini', price: '700', color: 'Dark Blue'},
        {name: 'Samsung', model: 'Galaxsi 10', price: '800', color: 'Blue'},
    ]
};

export const products = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                myProducts: state.myProducts.concat(action.payload)
            }
        }

        default:
            return state
    }
};