import axios from 'axios';
import Axios from 'config';
import * as AuthActions from "redux/actions";
import storage from '../storage';
import { toastMsg } from 'utility/utility';
import * as commonService from "utility/utility";

const handleAuthentication = async (error) => {
    const config = error.config;
    const token = storage.get("refresh_token", null);
    Axios.defaults.headers.common["x-refreshtoken"] = token;
    return await AuthActions.refreshToken().then(res => {
        config.headers.Authorization = `Bearer ${res.token}`;
        return Axios.request(config)
    });
};

export default function errorHandler(error) {
    commonService.isLoading.onNext(false);
    if (axios.isCancel(error)) {
        return Promise.reject(error);
    }
    if (error.message === "Network Error") {
        toastMsg('ERROR CONNECTING SERVER. PLEASE CHECK YOUR INTERNET CONNECTION.', true);
        return Promise.reject(error.message);
    }
    const message = error.response && error.response.data.message ? error.response.data.message : 'SEEMS LIKE SOMETHING WENT WRONG!';
    switch (error.response.status) {
        case 400:
            if (message === "JWT EXPIRED") handleAuthentication(error);
            else toastMsg(message, true);
            break;
        case 401:
            if (message === "JWT EXPIRED") {
                return handleAuthentication(error);
            } else toastMsg(message, true);
            console.log('unauthorized, logging out ...');
            break;
        case 500:
            toastMsg(message, true);
            break;
        case 504:
            toastMsg('SORRY, COULD NOT ACCESS THE EXTERNAL RESOURCE TO REFINE THE DATA FOR YOUR REQUEST, PLAESE TRY AGAIN LATER!', true);
            break;
        case 700:
            toastMsg(message, true);
            break;
        default:
            toastMsg(message ? message : 'SOMETHING WENT WRONG', true);
            break;
    }
    return Promise.reject(error.response);
}
