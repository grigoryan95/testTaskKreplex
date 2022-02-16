import React from "react";
import {SET_REGISTER_USER, SET_VALID_LOGIN, SET_VALID_REGISTER} from "../actionTypes/actionsTypes";


const initialState = {
    userDataObj: null,
    validRegistration: true,
    validLogin: false,
    newPage: false
};

export const registerAndLogin = (state = initialState, action) => {
    switch (action.type) {
        case SET_REGISTER_USER: {
            return {
                ...state,
                validLogin: true,
                userDataObj: action.payload
            }
        }
        case SET_VALID_REGISTER: {
            return {
                ...state,
                validRegistration: action.payload
            }
        }
        case SET_VALID_LOGIN: {
            return {
                ...state,
                newPage: true,
                validLogin: action.payload
            }
        }
        default:
            return state
    }
};