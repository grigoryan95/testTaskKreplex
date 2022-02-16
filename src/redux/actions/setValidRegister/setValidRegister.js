import {SET_VALID_REGISTER} from "../../actionTypes/actionsTypes";


export const setValidRegister = () => {
    return {
        type: SET_VALID_REGISTER,
        payload: false
    };
};