

import {FORGOT_PASSWORD_FORM_CHANGE ,FORGOT_PASSWORD_PROCESS_FAILED ,FORGOT_PASSWORD_PROCESS_SUCCESS,FORGOT_PASSWORD_PROCESS_STARTED } from '../constants';

const INITIAL_STATE = {
    isForgotPasswordProcessing:true
}

const forgotPasswordPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_FORM_CHANGE:
        debugger
            let event = action.payload;
            state[event.target.name] = event.target.value;
            return {...state};
        case FORGOT_PASSWORD_PROCESS_STARTED:
            state.isForgotPasswordProcessing = true;
            return {...state};
        case FORGOT_PASSWORD_PROCESS_SUCCESS:
            state.isForgotPasswordProcessing = false;
            state.forgotPasswordResponse = action.payload
            return {...state};
        case FORGOT_PASSWORD_PROCESS_FAILED:
            state.isForgotPasswordProcessing = false;
            return {...state};
        default:
            return { ...state };

    }

}


export default forgotPasswordPageReducer;