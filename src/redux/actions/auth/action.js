import { fetchOtherUserSuccessful } from "../auth";
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