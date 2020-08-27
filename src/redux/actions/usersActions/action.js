//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/authAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import { routes } from '../../../utility/constants/constants';
import store from '../../../redux/store/store';
import { loginPending, loginSuccessful, signupPending, signupSuccessful, authorizeUser, logout, completeOnBorading } from 'redux/reducers/auth/authReducer';

function getHistory() {
    const storeState = store.getState();
    const history = storeState.historyReducer.history;
    return history;
}

export const login = (credentials) => {
    loginPending();
    return API.login(credentials)
        .then(response => {
            if (response.data.error || response.data.code) {
                // errorHandler(response.data);
                let user = response.data.user;
                let authToken = response.data.authToken;
                let refreshToken = response.data.refreshToken;

                console.log("user:" + user);

                storage.set('token', authToken);
                storage.set('refresh_token', refreshToken);
                storage.set('user', user);
                loginSuccessful(response.data.user)
                authorizeUser(user, authToken, refreshToken);
            }
        }).catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
}

export const signup = (credentials) => {
    signupPending();
    return API.signup(credentials)
        .then(response => {
            if (response.data.error || response.data.code) {
                // errorHandler(response.data);
                let user = response.data.user;
                let authToken = response.data.authToken;
                let refreshToken = response.data.refreshToken;

                console.log("user:" + user);

                storage.set('token', authToken);
                storage.set('refresh_token', refreshToken);
                storage.set('user', user);
                signupSuccessful(response.data.user)
                authorizeUser(user, authToken, refreshToken);
            }
        }).catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
}

//export const forgotPassword = (credentials) => dispatch => dispatch({
//    type: AuthActionTypes.FORGOT_PASSWORD,
//    payload: API.forgotPassword(credentials)
//        .then(response => {
//
//            if (response.data.error) {
//                toastMsg(response.data);
//            } else {
//                toastMsg("Please check your email to reset your password!")
//                const history = getHistory();
//                history.push(routes.LOGIN);
//            }
//
//            return response.data;
//        })
//        .catch(error => {
//            console.log(error);
//            // errorHandler(error);
//            return error;
//        })
//});
//
//export const resetPassword = (credentials) => dispatch => dispatch({
//    type: AuthActionTypes.RESET_PASSWORD,
//    payload: API.resetPassword(credentials)
//        .then(response => {
//
//            if (response.data.error) {
//                toastMsg(response.data);
//            } else {
//                if (response.data.success) {
//                    storage.remove('reset_password_token');
//                    toastMsg("Your Password has been reset sucuessfully. Please login to continue");
//                    const history = getHistory();
//                    history.push(routes.LOGIN);
//                }
//            }
//
//            return response.data;
//        })
//        .catch(error => {
//            console.log(error);
//            // errorHandler(error);
//            return error;
//        })
//});

export const signOut = () => {
    storage.remove('token');
    storage.remove('user');
    storage.remove('refresh_token');
    storage.remove('step');
    window.location.replace(routes.FEEDS);
    logout();
};

export const completeOnBordingFlow = () => {
    storage.set('isOnBoard', true);
    return completeOnBorading();
}