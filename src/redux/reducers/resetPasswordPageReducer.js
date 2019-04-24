

import {RESET_PASSWORD_FORM_CHANGE,RESET_PASSWORD_PROCESS_STARTED,RESET_PASSWORD_PROCESS_SUCCESS ,RESET_PASSWORD_PROCESS_FAILED} from '../constants';

const INITIAL_STATE = {
    isResetPasswordProcessing:true
}

const resetPasswordPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_PASSWORD_FORM_CHANGE:
            let event = action.payload;
            state[event.target.name] = event.target.value;
            return {...state};
        case RESET_PASSWORD_PROCESS_STARTED:
            state.isResetPasswordProcessing = true;
            return {...state};
        case RESET_PASSWORD_PROCESS_SUCCESS:
            state.isResetPasswordProcessing = false;
            state.resetPasswordResponse = action.payload
            return {...state};
        case RESET_PASSWORD_PROCESS_FAILED:
            state.isResetPasswordProcessing = false;
            return {...state};
        default:
            return { ...state };

    }

}


export default resetPasswordPageReducer;