import {USER_LOGIN, USER_LOGOUT} from "../Constants/userConstants";

const initialState = {
    isAuthenticated: false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return {isAuthenticated: true};

        case USER_LOGOUT:
            return {isAuthenticated: false};
    }

    return state;
}