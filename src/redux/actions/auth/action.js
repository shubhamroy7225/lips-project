import { fetchOtherUserSuccessful, addFollowingUsers, addFollowers, appendFollowers, appendFollowingUsers } from "../auth";
import * as API from '../../../api/userAPI';

export const fetchOtherUserData = (userID) => {
    return API.fetchOtherUserData(userID)
        .then(response => {
            fetchOtherUserSuccessful({ user: response.data.user });
            return response;
        }).catch(error => {
            return error;
        })
}

export const fetchUserByUserName = (userName) => {
    return API.fetchUserByUserName(userName)
        .then(response => {
            fetchOtherUserSuccessful({ user: response.data.user });
            return response;
        }).catch(error => {
            return error;
        })
}

export const fetchFollowers = (userID, page, pageSize) => {
    let pagequery = `?limit=${pageSize}&page=${page}`;
    return API.fetchFollowers(userID, pagequery)
        .then(response => {
            if (page === 1) {
                addFollowers({ users: response.data.followers });
            } else {
                appendFollowers({ users: response.data.followers });
            }
            return response;
        }).catch(error => {
            return error;
        })
}

export const fetchFollowingUsers = (userID, page, pageSize) => {
    let pagequery = `?limit=${pageSize}&page=${page}`;
    return API.fetchFollowingUsers(userID, pagequery)
        .then(response => {
            if (page === 1) {
                addFollowingUsers({ users: response.data.following });
            } else {
                appendFollowingUsers({ users: response.data.following });
            }
            return response;
        }).catch(error => {
            return error;
        })
}