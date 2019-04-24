import {
    REGISTER_PROCESS_STARTED,
    REGISTER_PROCESS_SUCCESS,
    REGISTER_PROCESS_FAILED,
    REGISTER_FORM_CHANGE
} from "../constants";

import { REGISTER_URL } from "../../../config/constants";
import { ApiBase } from '../../utils/apiBase';

export const registerAction = params => {
    const apiBaseInstance = new ApiBase();
    return dispatch => {
        dispatch({
            type: REGISTER_PROCESS_STARTED
        });
        apiBaseInstance.instance.post(REGISTER_URL, params)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: REGISTER_PROCESS_SUCCESS,
                        payload: res.data,
                    });
                } else {
                    dispatch({
                        type: REGISTER_PROCESS_FAILED,
                        payload: res.data,
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: REGISTER_PROCESS_FAILED,
                    payload: err
                });
            });
    };
};

export const registerFormChange = (event)=>{
    return {
        type: REGISTER_FORM_CHANGE,
        payload:event
    }
}
