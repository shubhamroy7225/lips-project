import axios, { API_VERSION } from '../config';

export const login = (credentials) => {
    return axios.post(`${API_VERSION}/auth/login`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // defaultErrorHandler: false
    });
};

export const signup = (credentials) => {
    return axios.post(`${API_VERSION}/auth/signup`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        defaultErrorHandler: true
    });
};

export const forgotPassword = (credentials) => {

    return axios.post(`${API_VERSION}/auth/forgotpassword`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // defaultErrorHandler: false
    });
};

export const resetPassword = (credentials) => {

    return axios.put(`${API_VERSION}/auth/resetpassword`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // defaultErrorHandler: false
    });
};
export const changePrivacy = (body) => {
    return axios.put(`${API_VERSION}/user/settings/post`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};
export const verifyUsername = (name) => axios.get(`/auth/username/${name}`);