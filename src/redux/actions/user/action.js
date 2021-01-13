//import { AuthActionTypes } from './actionType';
import axios from 'config';
import * as API from '../../../api/authAPI';
import * as UserAPI from '../../../api/userAPI';
import * as configAPI from '../../../api/configAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import * as commonService from "../../../utility/utility";
import {
    refreshTokenPending,
    loginPending, loginSuccessful, signupPending, signupSuccessful, resetpasswordPending,
    forgotpasswordPending, authorizeUser, logout, completeOnBorading, changePrivacyPending,
    changePrivacySuccessful, updateuserPending, updateuserSuccessful, deleteuserPending,
    configPending, getUserPending, getUserSuccessful, getBlockUserPending, getBlockUserSuccessful,
    unblockUserPending, unblockUserSuccessful, openLandingModel
} from 'redux/actions/auth';
import { clearNotifications } from 'redux/actions/notification';
import { clearAllFeeds, hideFeedsOnBlockingUser, hideFeedsOnUnfollowingUser } from '../feed';



const setUserData = (data) => {
    storage.set('token', data.token);
    storage.set('refresh_token', data.refresh_token);
    storage.set('user', data.user);
};

export const login = (credentials) => {
    commonService.isLoading.onNext(true);
    clearAllFeeds();
    loginPending();
    return API.login(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            const { user, token, refresh_token } = response.data;
            storage.set('isOnBoard', true);
            setUserData(response.data);
            loginSuccessful(response.data.user);
            authorizeUser(user, token, refresh_token);
            return true
        })
};

export const openPageLandingModel = () => {
    storage.set('isLandingModalOpen', true);
    openLandingModel();
}

export const signup = (credentials) => {
    commonService.isLoading.onNext(true);
    clearAllFeeds();
    signupPending()
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
            const { user, token, refresh_token } = response.data;
            setUserData(response.data);
            authorizeUser(user, token, refresh_token);
            return response.data
        }).catch(() => signOut())
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

export const blockUser = (user) => {
    return UserAPI.blockUser(user.id)
        .then(response => {
            hideFeedsOnBlockingUser({ user })
            commonService.isLoading.onNext(false);
            return response;
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
            unblockUserSuccessful({ id });
            return response.data
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const fetchUser = () => {
    getUserPending()
    return UserAPI.fetchUserData()
        .then(response => {
            commonService.isLoading.onNext(false);
            storage.set('user', response.data.user);
            getUserSuccessful(response.data)
            return response.data;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const fetchBlockUser = () => {
    getBlockUserPending()
    return UserAPI.fetchBlockUser()
        .then(response => {
            commonService.isLoading.onNext(false);
            storage.set('user', response.data.users);
            getBlockUserSuccessful(response.data)
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
    configPending()
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
    resetpasswordPending()
    return API.resetPassword(credentials)
        .then(response => {
            commonService.isLoading.onNext(false);
            if (response.data.error) {
                toastMsg(response.data);
            } else {
                toastMsg("Your password has been reset successfully")
            }

            return response.data;
        })
        .catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
};

export const signOut = () => {
    storage.remove('token');
    storage.remove('user');
    storage.remove('refresh_token');
    storage.remove('isOnBoard');
    clearNotifications();
    clearAllFeeds();
    if (logout()) {
        // toastMsg("Sign out successfully")
    }

};

export const completeOnBordingFlow = () => {
    storage.set('isOnBoard', true);
    return completeOnBorading();
}

export const unfollowUser = (user) => {
    return UserAPI.unfollowUser(user.id)
        .then(response => {
            hideFeedsOnUnfollowingUser({ user });
            commonService.isLoading.onNext(false);
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const sendApprovalCode = (code) => {
    return UserAPI.sendApprovalCode({ code: code })
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        })
};

export const changePassword = (body) => {
    return API.changePassword(body)
        .then(response => {
            return response;
        })
        .catch(error => {
            console.log(error);
            return error;
        });
};

export const contact = (body) => {
    commonService.isLoading.onNext(true);
    return configAPI.contact(body)
    .then(res => {
        commonService.isLoading.onNext(false);
        if(res) toastMsg('Message sent!')
        return res
    })
    .catch(error => {
        commonService.isLoading.onNext(false);
        return error
    })
}