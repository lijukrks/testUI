import {
    LOGIN_PROCESS_STARTED,
    LOGIN_PROCESS_SUCCESS,
    LOGIN_PROCESS_FAILED,
    LOGIN_FORM_CHANGE
} from "../constants";

import { LOGIN_URL } from "../../../config/constants";
import { ApiBase } from '../../utils/apiBase';

export const loginAction = params => {
    const apiBaseInstance = new ApiBase();
    return dispatch => {
        dispatch({
            type: LOGIN_PROCESS_STARTED
        });
        apiBaseInstance.instance.post(LOGIN_URL, params)
            .then(res => {
                if (res.data.status) {
                    dispatch({
                        type: LOGIN_PROCESS_SUCCESS,
                        payload: res.data,
                    });
                } else {
                    dispatch({
                        type: LOGIN_PROCESS_FAILED,
                        payload: res.data,
                    });
                }
            })
            .catch(err => {
                dispatch({
                    type: LOGIN_PROCESS_FAILED,
                    payload: err
                });
            });
    };
};

export const loginFormChange = (event)=>{
    return {
        type: LOGIN_FORM_CHANGE,
        payload:event
    }
}
