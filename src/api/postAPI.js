import axios, { API_VERSION } from '../config';

export const updatePost = (credentials, id) => {
    return axios.put(`${API_VERSION}/post/${id}`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const submitCreateFeedApprovalData = (request) => {
    return axios.post(`${API_VERSION}/user/approval`, request, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const submitAccessCode = (request) => {
    return axios.post(`${API_VERSION}/user/approval/code`, request, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

