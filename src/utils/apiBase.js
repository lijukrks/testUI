import axios from "axios";
// import history from '../../../history';

import {
  API_BASE_URL,
  API_BASE_STAGE_URL
} from "../../config/constants";


export class ApiBase {
  constructor(params) {
    this.instance = axios.create({
      baseURL: API_BASE_URL + API_BASE_STAGE_URL,
      headers: this.handleHeaders(params)
    });
    this.instance.interceptors.response.use(function (response) { // to check session-expire
      // Do something with response data
      return response;
    }, (error) => {
      console.log('error',error.response)
      let status = error&&error.response&&error.response.status;
      let code = error&&error.response&&error.response.data&&error.response.data.code;
      if (status === 401 && code === "tokenExpired") {
        localStorage.clear();
        // history.push('/expired');
      } 
      // when the api call returns an error.
      //go to the error page.
      // history.push(`/error?source=${error.config.url}`);
      return Promise.reject(error);
    });
    this.handleHeaders = this.handleHeaders.bind(this);
  }
  handleHeaders(params) { // setting headers for all api requests
    let tocken = localStorage.getItem("idToken");
    if (params) {
      return params;
    } else if (!tocken) {
      return {
        "Content-Type": "application/json"
      };
    } else {
      return {
        "Content-Type": "application/json",
        Authorization: tocken
      };
    }
  }
}

// TODO: move all string to constants