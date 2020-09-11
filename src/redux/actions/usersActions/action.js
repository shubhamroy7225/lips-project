//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/authAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import { routes } from '../../../utility/constants/constants';
import store from '../../../redux/store/store';
import { loginPending, loginSuccessful, signupPending, signupSuccessful,  forgotpasswordPending, forgotpasswordSuccessful, authorizeUser, logout, completeOnBorading, changePrivacyPending, changePrivacySuccessful } from 'redux/actions/auth';

function getHistory() {
    const storeState = store.getState();
    const history = storeState.historyReducer.history;
    return history;
}

export const login = (credentials) => {
    store.dispatch(loginPending());
    return API.login(credentials)
        .then(response => {
            if (response.data.error || response.data.code) {
                //errorHandler(response.data);
            }
            else {
                let user = response.data.user;
                let authToken = response.data.token;
                let refreshToken = response.data.refresh_token;
                debugger
                console.log("user:" + user);

                storage.set('token', authToken);
                storage.set('refresh_token', refreshToken);
                storage.set('user', user);
                store.dispatch(loginSuccessful(response.data.user))
                store.dispatch(authorizeUser(user, authToken, refreshToken));
            }
        }).catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
}

export const signup = (credentials) => {
    store.dispatch(signupPending());
    return API.signup(credentials)
        .then(response => {
            if (response.data.error || response.data.code) {
                // errorHandler(response.data);
            } else {
                let user = response.data.user;
                let authToken = response.data.authToken;
                let refreshToken = response.data.refreshToken;

                console.log("user:" + user);

                storage.set('token', authToken);
                storage.set('refresh_token', refreshToken);
                storage.set('user', user);
                store.dispatch(signupSuccessful(response.data.user));
                return  store.dispatch(authorizeUser(user, authToken, refreshToken));
            }
        }).catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
}
export const changePrivacy = ({privacy_settings}) => {
    store.dispatch(changePrivacyPending());
    return API.changePrivacy({privacy_settings})
        .then(response => {
            if (response.data.error || response.data.code) {
                // errorHandler(response.data);
            } else {
                let user = storage.get('user', null);
                storage.set('user', {...user, privacy_settings});
                store.dispatch(changePrivacySuccessful({privacy_settings}));
            }
        }).catch(error => {
            console.log(error);
            // errorHandler(error);
            return error;
        })
}

export const forgotPassword = (credentials) => {
    store.dispatch(forgotpasswordPending());
   return API.forgotPassword(credentials)
       .then(response => {
        debugger
           if (response.data.error) {
               toastMsg(response.data);
          } else {
               toastMsg("Please check your email to reset your password!")
           }

           return response.data;
       })
       .catch(error => {
           console.log(error);
           // errorHandler(error);
           return error;
       })
};
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