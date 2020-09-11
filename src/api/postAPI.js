import axios, { API_VERSION } from '../config';

export const createPost = (credentials) => {
    return axios.post(`${API_VERSION}/post`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // defaultErrorHandler: false
    });
};

export const updatePost = (credentials, id) => {
    return axios.put(`${API_VERSION}/post/${id}`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};
