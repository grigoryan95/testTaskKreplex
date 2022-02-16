import {SET_VALID_LOGIN} from "../../actionTypes/actionsTypes";


export const setValidLogin = () => {
    return {
        type: SET_VALID_LOGIN,
        payload: false
    };
};