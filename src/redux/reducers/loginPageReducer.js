

import {
    LOGIN_FORM_CHANGE, LOGIN_PROCESS_SUCCESS, LOGIN_PROCESS_FAILED, LOGIN_PROCESS_STARTED,
} from '../constants';

const INITIAL_STATE = {
    isLoginProcessing:true
}

const loginPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_FORM_CHANGE:
            let event = action.payload;
            state[event.target.name] = event.target.value;
            return {...state};
        case LOGIN_PROCESS_STARTED:
            state.isLoginProcessing = true;
            return {...state};
        case LOGIN_PROCESS_SUCCESS:
            localStorage.setItem("idToken", action.payload.data.idToken || '');
            localStorage.setItem("accessToken", action.payload.data.accessToken || '')
            localStorage.setItem("refreshToken", action.payload.data.refreshToken || '')
            state.isLoginProcessing = false;
            return {...state};
        case LOGIN_PROCESS_FAILED:
            state.isLoginProcessing = false;
            return {...state};
        default:
            return { ...state };

    }

}


export default loginPageReducer;