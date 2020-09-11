import storage from '../../../utility/storage';
import { createReducer } from 'redux-act';
import * as actions from 'redux/actions/auth';
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

export const initialState = {
    token: token,
    refresh_token: refresh_token,
    user: user,
    isloading: false,
    resetPasswordToken: null,
    isOnBoard: isOnBoard,
    isFeedApproved: false
}

export const authReducer = createReducer({
    [actions.loginPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.loginSuccessful]: (state, payload) =>
        updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user,
        }),
    [actions.signupPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.signupSuccessful]: (state, payload) =>
        updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user,
        }),
    [actions.authorizeUser]: (state, payload) =>
        updateObject(state,
            {
                token: payload.token,
                user: payload.user,
                refresh_token: payload.refresh_token,
            }),
    [actions.updateUser]: (state, payload) =>
        updateObject(state,
            {
                user: payload.user,
            }),
    [actions.logout]: (state) =>
        updateObject(state,
            {
                token: token,
                refresh_token: refresh_token,
                user: user,
                isloading: false,
                resetPasswordToken: null
            }),
    [actions.completeOnBorading]: (state) => {
        debugger
        return updateObject(state,
            {
                isOnBoard: true,
            })
    },
    [actions.allowedToPost]: (state) => updateObject(state, { isFeedApproved: true })
}, initialState); // <-- This is the default state
