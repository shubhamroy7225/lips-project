import storage from '../../../utility/storage';
import { createAction, createReducer } from 'redux-act';
import store from 'redux/store/store';
const token = storage.get("token", null);
const refresh_token = storage.get("refresh_token", null);
const user = storage.get("user", null);
const isOnBoard = storage.get("isOnBoard", null);

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

//actions
export const loginPending = createAction('Login API started fetching');
export const loginSuccessful = createAction('Login API successful', (user) => ({ user }));
export const signupPending = createAction('Sign up API started fetching');
export const signupSuccessful = createAction('Sign up API successful', (user) => ({ user }));
export const authorizeUser = createAction('Authorize user after authentication', (user, token, refresh_token) => ({ user, token, refresh_token }));
export const updateUser = createAction('Update user after authentication', (user) => ({ user }));
export const logout = createAction('Update user after authentication');
export const completeOnBorading = createAction('Complete on boarding flow');

loginPending.assignTo(store);
loginSuccessful.assignTo(store);
signupPending.assignTo(store);
signupSuccessful.assignTo(store);
authorizeUser.assignTo(store);
updateUser.assignTo(store);
logout.assignTo(store);
completeOnBorading.assignTo(store);


export const initialState = {
    token: token,
    refresh_token: refresh_token,
    user: user,
    isloading: false,
    resetPasswordToken: null,
    isOnBoard: isOnBoard
}

export const authReducer = createReducer({
    [loginPending]: (state) =>
        updateObject(state, { isloading: true }),
    [loginSuccessful]: (state, payload) => {
        debugger
        return updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user,
        })
    },
    [signupPending]: (state) =>
        updateObject(state, { isloading: true }),
    [signupSuccessful]: (state, payload) =>
        updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user,
        }),
    [authorizeUser]: (state, payload) =>
        updateObject(state,
            {
                token: payload.token,
                user: payload.user,
                refresh_token: payload.refresh_token,
            }),
    [updateUser]: (state, payload) =>
        updateObject(state,
            {
                user: payload.user,
            }),
    [logout]: (state) =>
        updateObject(state,
            {
                token: token,
                refresh_token: refresh_token,
                user: user,
                isloading: false,
                resetPasswordToken: null
            }),
    [completeOnBorading]: (state) => {
        debugger
        return updateObject(state,
            {
                isOnBoard: true,
            })
    }
}, initialState); // <-- This is the default state
