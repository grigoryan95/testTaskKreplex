import {SET_REGISTER_USER} from "../../actionTypes/actionsTypes";


export const setUserData = (user) => {
    return {
        type: SET_REGISTER_USER,
        payload: user
    };
};