import {
    VERIFY_PROCESS_STARTED,
    VERIFY_PROCESS_SUCCESS,
    VERIFY_PROCESS_FAILED,
    VERIFY_FORM_CHANGE
} from "../constants";

import { VERIFY_URL } from "../../../config/constants";
import { ApiBase } from '../../utils/apiBase';

export const verifyAction = params => {
    const apiBaseInstance = new ApiBase();
    return dispatch => {
        dispatch({
            type: VERIFY_PROCESS_STARTED
        });
        apiBaseInstance.instance.post(VERIFY_URL, params)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: VERIFY_PROCESS_SUCCESS,
                        payload: res.data,
                    });
                } else {
                    dispatch({
                        type: VERIFY_PROCESS_FAILED,
                        payload: res.data,
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: VERIFY_PROCESS_FAILED,
                    payload: err
                });
            });
    };
};

export const verifyFormChange = (event)=>{
    return {
        type: VERIFY_FORM_CHANGE,
        payload:event
    }
}
