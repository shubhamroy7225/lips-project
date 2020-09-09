import axios, { API_VERSION } from '../config';

export const fetchConfig = () => {
    return axios.get(API_VERSION + 'config', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const presignUrl = (credentials) => {
    return axios.patch(`${API_VERSION}/presign_url`,credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};