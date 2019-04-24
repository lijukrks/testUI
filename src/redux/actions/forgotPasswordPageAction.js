import {
    FORGOT_PASSWORD_PROCESS_STARTED,
    FORGOT_PASSWORD_PROCESS_SUCCESS,
    FORGOT_PASSWORD_PROCESS_FAILED,
    FORGOT_PASSWORD_FORM_CHANGE
} from "../constants";
import { FORGOT_PASSWORD_URL } from "../../../config/constants";
import { ApiBase } from '../../utils/apiBase';

export const forgotPasswordAction = params => {
    console.log("params",params);
    const apiBaseInstance = new ApiBase();
    return dispatch => {
        debugger
        dispatch({
            
            type: FORGOT_PASSWORD_PROCESS_STARTED
        });
        apiBaseInstance.instance.post(FORGOT_PASSWORD_URL, params)
            .then(res => {
                if (res.data.status) {
                    debugger
                    dispatch({
                        type: FORGOT_PASSWORD_PROCESS_SUCCESS,
                        payload: res.data,
                    });
                } else {
                    debugger
                    dispatch({
                        type: FORGOT_PASSWORD_PROCESS_FAILED,
                        payload: res.data,
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: FORGOT_PASSWORD_PROCESS_FAILED,
                    payload: err
                });
            });
    };
};

export const forgotPasswordFormChange = (event)=>{
    debugger
    return {
    
        type: FORGOT_PASSWORD_FORM_CHANGE,
        payload:event
    }
}

