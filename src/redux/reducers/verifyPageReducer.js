

import { VERIFY_FORM_CHANGE, VERIFY_PROCESS_STARTED, VERIFY_PROCESS_SUCCESS, VERIFY_PROCESS_FAILED } from '../constants';

const INITIAL_STATE = {
    isVerifyProcessing:true
}

const verifyPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case VERIFY_FORM_CHANGE:
            let event = action.payload;
            state[event.target.name] = event.target.value;
            return {...state};
        case VERIFY_PROCESS_STARTED:
            state.isVerifyProcessing = true;
            return {...state};
        case VERIFY_PROCESS_SUCCESS:
            state.isVerifyProcessing = false;
            state.verificationResponse = action.payload
            return {...state};
        case VERIFY_PROCESS_FAILED:
            state.isVerifyProcessing = false;
            return {...state};
        default:
            return { ...state };

    }

}


export default verifyPageReducer;