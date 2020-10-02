//import { AuthActionTypes } from './actionType';
import axios from 'config';
import errorHandler from "utility/errorHandler/errorHandler"
import * as API from '../../../api/authAPI';
import * as UserAPI from '../../../api/userAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import { routes } from '../../../utility/constants/constants';
import * as commonService from "../../../utility/utility";
import store from '../../store/store';
import { rejectRequestSuccessful, rejectRequestPending, acceptRequestSuccessful, acceptRequestPending, refreshTokenPending, refreshTokenSuccessful, loginPending, loginSuccessful, signupPending, signupSuccessful, resetpasswordPending, resetpasswordSuccessful, forgotpasswordPending, forgotpasswordSuccessful, authorizeUser, logout, completeOnBorading, changePrivacyPending, changePrivacySuccessful, updateuserPending, updateuserSuccessful, deleteuserPending, deleteuserSuccessful, configPending, configSuccessful, getUserPending, getUserSuccessful, getBlockUserPending, getBlockUserSuccessful, unblockUserPending, unblockUserSuccessful } from 'redux/actions/auth';

function getHistory() {
    const storeState = store.getState();
    const history = storeState.historyReducer.history;
    return history;
}

const setUserData = (data) => {
    storage.set('token', data.token);
    storage.set('refresh_token', data.refresh_token);
    storage.set('user', data.user);
    storage.set('isOnBoard', true);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
};

export const login = (credentials) => {
    commonService.isLoading.onNext(true);
    loginPending();
    return API.login(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            const { user, token, refresh_token } = response.data
            setUserData(response.data);
            loginSuccessful(response.data.user);
            authorizeUser(user, token, refresh_token);
            return true
        })
};

export const signup = (credentials) => {
    commonService.isLoading.onNext(true);
    store.dispatch(signupPending());
    return API.signup(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            const { user, token, refresh_token } = response.data;
            setUserData(response.data);
           signupSuccessful(response.data.user);
            authorizeUser(user, token, refresh_token);
            return true
        })
};
export const refreshToken = (credentials) => {
    commonService.isLoading.onNext(true);
    refreshTokenPending();
    return API.refreshToken(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
            const { user, token, refresh_token } = response.data;
            setUserData(response.data);
            authorizeUser(user, token, refresh_token);
            return response.data
        })
};

export const changePrivacy = ({ privacy_settings }) => {
    commonService.isLoading.onNext(true);
    changePrivacyPending();
    return API.changePrivacy({ privacy_settings })
        .then(res => {
            commonService.isLoading.onNext(false);
            let user = storage.get('user', null);
            storage.set('user', { ...user, privacy_settings });
            changePrivacySuccessful({ privacy_settings });
            return res
        })
};
export const verifyUsername = (user_name) => {
    commonService.isLoading.onNext(true);
    return API.verifyUsername(user_name)
        .then(res => {
            commonService.isLoading.onNext(false);
            return res
        })
};

export const forgotPassword = (credentials) => {
    commonService.isLoading.onNext(true);
    forgotpasswordPending();
    return API.forgotPassword(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            if (response.data.error) {
                toastMsg(response.data);
            } else {
                toastMsg("Please check your email to reset your password!")
            }

            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const deleteUser = () => {
    commonService.isLoading.onNext(true);
    deleteuserPending();
    return UserAPI.deleteUser()
        .then(response => {
            commonService.isLoading.onNext(false);
            signOut();
            return response.data
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const unblockUser = (id) => {
    commonService.isLoading.onNext(true);
    unblockUserPending();
    return UserAPI.unblockUser(id)
        .then(response => {
            commonService.isLoading.onNext(false);
            unblockUserSuccessful({id});
            return response.data
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const fetchUser = () => {
    store.dispatch(getUserPending());
    return UserAPI.fetchUserData()
        .then(response => {
            commonService.isLoading.onNext(false);
            storage.set('user', response.data.user);
            store.dispatch(getUserSuccessful(response.data));
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const fetchBlockUser = () => {
    store.dispatch(getBlockUserPending());
    return UserAPI.fetchBlockUser()
        .then(response => {
            commonService.isLoading.onNext(false);
            storage.set('user', response.data.users);
            store.dispatch(getBlockUserSuccessful(response.data));
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const updateUser = (credentials) => {
    commonService.isLoading.onNext(true);
    updateuserPending();
    return UserAPI.updateUser(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            storage.set('user', response.data.user);
            updateuserSuccessful(response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const config = (credentials) => {
    commonService.isLoading.onNext(true);
    store.dispatch(configPending());
    return UserAPI.config(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};
//
export const resetPassword = (credentials) => {
    commonService.isLoading.onNext(true);
    resetpasswordPending();
    return API.resetPassword(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            return true;

        })
        .catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
};
export const acceptRequest = (id) => {
    commonService.isLoading.onNext(true);
    acceptRequestPending();
    return UserAPI.acceptRequest(id)
        .then(response => {
            commonService.isLoading.onNext(false);
            acceptRequestSuccessful(response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};
export const rejectRequest = (id) => {
    commonService.isLoading.onNext(true);
    refreshTokenPending();
    return UserAPI.rejectRequest(id)
        .then(response => {
            commonService.isLoading.onNext(false);
            rejectRequestSuccessful(response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};
export const signOut = () => {
    storage.remove('token');
    storage.remove('user');
    storage.remove('refresh_token');
    storage.remove('isOnBoard');
    store.dispatch(logout());
    
};

export const completeOnBordingFlow = () => {
    storage.set('isOnBoard', true);
    return completeOnBorading();
}