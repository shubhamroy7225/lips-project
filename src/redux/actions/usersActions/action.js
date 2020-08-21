import { AuthActionTypes } from './actionType';
import * as API from '../../../api/authAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import { routes } from '../../../utility/constants/constants';
import store from '../../../redux/store/store';

function getHistory() {
    const storeState = store.getState();
    const history = storeState.historyReducer.history;
    return history;
}


export const login = (credentials) => dispatch => dispatch({
    type: AuthActionTypes.LOGIN,
    payload: API.login(credentials)
        .then(response => {
            if (response.data.error || response.data.code) {
                // errorHandler(response.data);
            } else {
                const history = getHistory();
            }
        })
        .catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
});

export const signup = (credentials) => dispatch => dispatch({
    type: AuthActionTypes.SIGNUP,
    payload: API.signup(credentials)
        .then(response => {
            return response.data;
        }).catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
});

export const forgotPassword = (credentials) => dispatch => dispatch({
    type: AuthActionTypes.FORGOT_PASSWORD,
    payload: API.forgotPassword(credentials)
        .then(response => {

            if (response.data.error) {
                toastMsg(response.data);
            } else {
                toastMsg("Please check your email to reset your password!")
                const history = getHistory();
                history.push(routes.LOGIN);
            }

            return response.data;
        })
        .catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
});

export const resetPassword = (credentials) => dispatch => dispatch({
    type: AuthActionTypes.RESET_PASSWORD,
    payload: API.resetPassword(credentials)
        .then(response => {

            if (response.data.error) {
                toastMsg(response.data);
            } else {
                if (response.data.success) {
                    storage.remove('reset_password_token');
                    toastMsg("Your Password has been reset sucuessfully. Please login to continue");
                    const history = getHistory();
                    history.push(routes.LOGIN);
                }
            }

            return response.data;
        })
        .catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
});

export const authorizeUser = (user_profile) => {
    console.log("authorize:" + user_profile.access_token);
    console.log("user:" + user_profile);

    storage.set('token', user_profile.access_token);
    storage.set('refresh_token', user_profile.refresh_token);
    storage.set('user', user_profile);


    const token = user_profile.access_token;
    const refresh_token = user_profile.refresh_token;

    return {
        type: AuthActionTypes.AUTHORIZE,
        payload: {
            token,
            user_profile,
            refresh_token
        }
    }
};

export const logout = () => {

    storage.remove('token');
    storage.remove('user');
    storage.remove('refresh_token');
    storage.remove('step');
    window.location.replace(routes.HOME);
    return {
        type: AuthActionTypes.LOGOUT,
    }
};

export const updateUserProfile = (user) => dispatch => dispatch({
    type: AuthActionTypes.UPDATE_USER,
    payload: user
})