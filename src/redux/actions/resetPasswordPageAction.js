import {
    RESET_PASSWORD_PROCESS_FAILED,
    RESET_PASSWORD_PROCESS_SUCCESS,
    RESET_PASSWORD_PROCESS_STARTED,
    RESET_PASSWORD_FORM_CHANGE
} from "../constants";

import { VERIFY_URL } from "../../../config/constants";
import { ApiBase } from '../../utils/apiBase';

export const resetPasswordAction = params => {
    const apiBaseInstance = new ApiBase();
    return dispatch => {
        dispatch({
            type: RESET_PASSWORD_PROCESS_STARTED
        });
        apiBaseInstance.instance.post(VERIFY_URL, params)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: RESET_PASSWORD_PROCESS_SUCCESS,
                        payload: res.data,
                    });
                } else {
                    dispatch({
                        type: RESET_PASSWORD_PROCESS_FAILED,
                        payload: res.data,
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: RESET_PASSWORD_PROCESS_FAILED,
                    payload: err
                });
            });
    };
};

export const resetFormChange = (event)=>{
    return {
        type: RESET_PASSWORD_FORM_CHANGE,
        payload:event
    }
}
