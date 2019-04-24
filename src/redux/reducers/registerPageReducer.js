

import { REGISTER_FORM_CHANGE, REGISTER_PROCESS_STARTED, REGISTER_PROCESS_SUCCESS, REGISTER_PROCESS_FAILED } from '../constants';

const INITIAL_STATE = {
    isRegisterProcessing:true
}

const registerPageReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_FORM_CHANGE:
            let event = action.payload;
            state[event.target.name] = event.target.value;
            return {...state};
        case REGISTER_PROCESS_STARTED:
            state.isRegisterProcessing = true;
            return {...state};
        case REGISTER_PROCESS_SUCCESS:
            state.isRegisterProcessing = false;
            state.registrationResponse = action.payload;
            return {...state};
        case REGISTER_PROCESS_FAILED:
            state.isRegisterProcessing = false;
            return {...state};
        default:
            return { ...state };

    }

}


export default registerPageReducer;