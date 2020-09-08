import axios,{API_VERSION} from '../config';

export const login = (credentials) => {
    return axios.post('/users/sign_in', credentials, {
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

    return axios.post('/users/password', credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // defaultErrorHandler: false
    });
};

export const resetPassword = (user) => {

    return axios.put('/users/password', user, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // defaultErrorHandler: false
    });
};
