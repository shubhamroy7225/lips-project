import axios, { API_VERSION } from '../config';
import pureAxios from 'axios';

export const fetchConfig = () => {
    return axios.get(API_VERSION + 'config', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const fetchUploadUrl = (request) => {
    return axios.patch(`${API_VERSION}/presign_url`, request, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};


export const uploadImageToS3 = (url, arrayBuffer) => {
    return pureAxios.put(url, arrayBuffer);
}

export const contact = (body) => {return axios.post(`${API_VERSION}/config/contactus`, body)}