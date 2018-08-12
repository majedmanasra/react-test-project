import {USER_LOGIN, USER_LOGOUT} from "../Constants/userConstants";

export function login() {
    return {
        type: USER_LOGIN
    }
}

export function logout() {
    return {
        type: USER_LOGOUT
    }
}