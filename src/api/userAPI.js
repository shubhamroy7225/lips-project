import axios, { API_VERSION } from '../config';

export const updateUser = (credentials) => {
    return axios.put(`${API_VERSION}/user`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const config = (credentials) => {
    return axios.patch(`${API_VERSION}/presign_url`, credentials, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
}

export const fetchUserData = () => {
    return axios.get(`${API_VERSION}/user`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const fetchOtherUserData = (userID) => {
    return axios.get(`${API_VERSION}/user/${userID}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const fetchUserByUserName = (userName) => {
    return axios.get(`${API_VERSION}/user/username/${userName}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const deleteUser = () => {
    return axios.delete(`${API_VERSION}/user`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};
export const fetchUser = (id) => {
    return axios.get(`${API_VERSION}/user/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const createPrivacyPolicy = (credentials) => {
    return axios.put(`${API_VERSION}/user/settings/post`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const blockUser = (id) => {
    return axios.put(`${API_VERSION}/user/${id}/block`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const unblockUser = (id) => {
    return axios.put(`${API_VERSION}/user/${id}/unblock`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const followUser = (id) => {
    return axios.put(`${API_VERSION}/user/${id}/follow`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const unfollowUser = (id) => {
    return axios.put(`${API_VERSION}/user/${id}/unfollow`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const acceptRequest = (id) => {
    return axios.put(`${API_VERSION}/user/follow/${id}/accept`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const rejectRequest = (id) => {
    return axios.put(`${API_VERSION}/user/follow/${id}/reject`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const fetchBlockUser = () => {
    return axios.get(`${API_VERSION}/user/block`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};


export const sendApprovalCode = (request) => {
    return axios.post(`${API_VERSION}/user/approval/code`, request, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};

export const fetchFollowers = (userID, pagequery) => {
    return axios.get(`${API_VERSION}/user/${userID}/followers${pagequery}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};


export const fetchFollowingUsers = (userID, pagequery) => {
    return axios.get(`${API_VERSION}/user/${userID}/following${pagequery}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    });
};
