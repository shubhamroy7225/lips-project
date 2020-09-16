//import { AuthActionTypes } from './actionType';
import axios  from 'config';
import errorHandler from "utility/errorHandler/errorHandler"
import * as API from '../../../api/authAPI';
import * as UserAPI from '../../../api/userAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import { routes } from '../../../utility/constants/constants';
import store from '../../../redux/store/store';
import { loginPending, loginSuccessful, signupPending, signupSuccessful, resetpasswordPending, resetpasswordSuccessful, forgotpasswordPending, forgotpasswordSuccessful, authorizeUser, logout, completeOnBorading, changePrivacyPending, changePrivacySuccessful, updateuserPending, updateuserSuccessful, deleteuserPending, deleteuserSuccessful, configPending, configSuccessful, getUserPending, getUserSuccessful } from 'redux/actions/auth';

function getHistory() {
    const storeState = store.getState();
    const history = storeState.historyReducer.history;
    return history;
}
const setUserData = (data) => {
    storage.set('token', data.token);
    storage.set('refresh_token', data.refresh_token);
    storage.set('user', data.user);
    axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
};

export const login = (credentials) => {
    store.dispatch(loginPending());
    return API.login(credentials)
        .then(response => {
            const {user, token, refresh_token} = response.data
            setUserData(response.data);
            store.dispatch(loginSuccessful(response.data.user));
            store.dispatch(authorizeUser(user, token, refresh_token));
            return true
        })
};

export const signup = (credentials) => {
    store.dispatch(signupPending());
    return API.signup(credentials)
        .then(response => {
            const {user, token, refresh_token} = response.data;
            setUserData(response.data);
            store.dispatch(signupSuccessful(response.data.user));
            return  store.dispatch(authorizeUser(user, token, refresh_token));
        })
};
export const changePrivacy = ({privacy_settings}) => {
    store.dispatch(changePrivacyPending());
    return API.changePrivacy({privacy_settings})
        .then(res => {
            let user = storage.get('user', null);
            storage.set('user', {...user, privacy_settings});
            store.dispatch(changePrivacySuccessful({privacy_settings}));
            return res
        })
};
export const verifyUsername = (user_name) => {
    return API.verifyUsername(user_name)
        .then(res => {
            return res
        })
};

export const forgotPassword = (credentials) => {
    store.dispatch(forgotpasswordPending());
    return API.forgotPassword(credentials)
        .then(response => {
            if (response.data.error) {
                toastMsg(response.data);
            } else 
            {
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
    store.dispatch(deleteuserPending());
    return UserAPI.deleteUser()
        .then(response => {
            return response.data
        })
       .catch(error => {
           console.log(error);
           return error;
       })
};

export const fetchUsers = (credentials) => {
    store.dispatch(getUserPending());
    return UserAPI.fetchUsers(credentials)
        .then(response => {
            store.dispatch(getUserSuccessful(response.data));
            return response.data;
        })
       .catch(error => {
           console.log(error);
           return error;
       })
};
export const updateUser = (credentials) => {
    store.dispatch(updateuserPending());
    return UserAPI.updateUser(credentials)
        .then(response => {
            store.dispatch(updateuserSuccessful(response.data));
            return response;
        })
       .catch(error => {
           console.log(error);
           return error;
       })
};

export const config = (credentials) => {
    store.dispatch(configPending());
    return UserAPI.config(credentials)
        .then(response => {
            return response.data;
        })
       .catch(error => {
           console.log(error);
           return error;
       })
};
//
export const resetPassword = (credentials) => {
   store.dispatch(resetpasswordPending());
   return API.resetPassword(credentials)
       .then(response => {
            return true;
           
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
    storage.remove('step');
    logout();
};

export const completeOnBordingFlow = () => {
    storage.set('isOnBoard', true);
    return completeOnBorading();
}