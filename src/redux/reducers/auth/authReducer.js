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
    blockedUsers: []
}

export const authReducer = createReducer({
    [actions.loginPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.loginSuccessful]: (state, payload) =>
        updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user,
        }),
    [actions.refreshTokenPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.refreshTokenSuccessful]: (state, payload) =>
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
    [actions.forgotpasswordPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.forgotpasswordSuccessful]: (state, payload) => {
        return updateObject(state, {
            isloading: false
        })
    },
    [actions.resetpasswordPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.resetpasswordSuccessful]: (state, payload) => {
        return updateObject(state, {
            isloading: false
        })
    },
    [actions.deleteuserPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.deleteuserSuccessful]: (state, payload) => {
        return updateObject(state, {
            isloading: false
        })
    },
    [actions.getUserPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.getUserSuccessful]: (state, payload) => {
        return updateObject(state, {
            isloading: false,
            user: payload.user
        })
    },

    [actions.getBlockUserPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.getBlockUserSuccessful]: (state, payload) => {
        return updateObject(state, {
            isloading: false,
            blockedUsers: payload.users
        })
    },

     [actions.unblockUserPending]: (state) =>
         updateObject(state, { isloading: true }),
     [actions.unblockUserSuccessful]: (state, payload) => {
         let {id} =  payload;
         let userList = [...state.blockedUsers];
         debugger
         userList.splice(userList.findIndex(e => e.id === id), 1)
        debugger
         return updateObject(state, {
             isloading: false,
              blockedUsers: userList
         })
     },

    [actions.configPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.configSuccessful]: (state, payload) => {
        return updateObject(state, {
            isloading: false
        })
    },

    [actions.updateuserSuccessful]: (state, payload) => updateObject(state,
        {
            user: payload.user,
        }),
    [actions.logout]: (state) => {
        return updateObject(state,
            {
                token: null,
                refresh_token: null,
                user: null,
                isloading: false,
                resetPasswordToken: null,
                isOnBoard: false
            })
    },
    [actions.completeOnBorading]: (state) => {
        return updateObject(state,
            {
                isOnBoard: true,
            })
    },
    [actions.changePrivacySuccessful]: (state, payload) => {
        return updateObject(state,
            {
                isOnBoard: true,
                user: { ...user, privacy_settings: payload.privacy_settings }
            })
    }
}, initialState); // <-- This is the default state
