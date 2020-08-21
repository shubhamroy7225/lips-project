import { AuthActionTypes } from '../../actions/usersActions/actionType';
import storage from '../../../utility/storage';

const token = storage.get("token", null);
const refresh_token = storage.get("refresh_token", null);
const user = storage.get("user", null);

export const initialState = {
    token: token,
    refresh_token: refresh_token,
    user: user,
    isloading: false,
    isAdmin: user && user.role === "admin" ? true : false,
    resetPasswordToken: null
}

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case AuthActionTypes.LOGIN_PENDING:
            return updateObject(state, { isloading: true });
        case AuthActionTypes.LOGIN_FULFILLED:
            return updateObject(state, {
                isloading: false, user: action.payload ? action.payload.user : state.user,
            });

        case AuthActionTypes.SIGNUP_PENDING:
            return updateObject(state, { isloading: true });
        case AuthActionTypes.SIGNUP_FULFILLED:
            return updateObject(state, { isloading: false });

        case AuthActionTypes.FORGOT_PASSWORD_PENDING:
            return updateObject(state, { isloading: true });
        case AuthActionTypes.FORGOT_PASSWORD_FULFILLED:
            return updateObject(state, { isloading: false });

        case AuthActionTypes.RESET_PASSWORD_PENDING:
            return updateObject(state, { isloading: true });
        case AuthActionTypes.RESET_PASSWORD_FULFILLED:
            return updateObject(state, { isloading: false });

        case AuthActionTypes.AUTHORIZE:
            const payload = action.payload;
            const isAdmin = payload.user_profile.role === "superadmin" ? true : false;
            return updateObject(state,
                {
                    token: payload.token,
                    user: payload.user_profile,
                    refresh_token: payload.refresh_token,
                    isAdmin: isAdmin
                });

        case AuthActionTypes.LOGOUT:
            return updateObject(state, {
                token: null,
                refresh_token: null,
                user: null,
                isloading: false,
                isAdmin: false,
                impersonate: false,
            });

        case AuthActionTypes.UPDATE_USER:
            storage.set('user', action.payload);
            return updateObject(state, {
                user: action.payload
            })
        default: return state;
    }
}