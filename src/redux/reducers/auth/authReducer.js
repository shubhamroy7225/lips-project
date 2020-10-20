import storage from '../../../utility/storage';
import { createReducer } from 'redux-act';
import * as actions from 'redux/actions/auth';
const token = storage.get("token", null);
const refresh_token = storage.get("refresh_token", null);
const user = storage.get("user", null);
const isOnBoard = storage.get("isOnBoard", null);
const isLandingModalOpen = storage.get("isLandingModalOpen", null);

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
    isLandingModalOpen,
    isloading: false,
    resetPasswordToken: null,
    isOnBoard: isOnBoard,
    otherUser: null,
    blockedUsers: [],
    followers: [],
    following: [],
    isOpeningFollowers: false
}

export const authReducer = createReducer({
    [actions.loginPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.loginSuccessful]: (state, payload) =>
        updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user, isOnBoard: true
        }),
    [actions.refreshTokenPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.refreshTokenSuccessful]: (state, payload) =>
        updateObject(state, {
            isloading: false, user: payload ? payload.user : state.user,
        }),
    [actions.signupPending]: (state) =>
        updateObject(state, { isloading: true, isOnBoard: false }),
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
            isloading: false, payload
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
        let { id } = payload;
        let userList = [...state.blockedUsers];
        userList.splice(userList.findIndex(e => e.id === id), 1)
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
        const currentUser = { ...state.user };
        return updateObject(state,
            {
                user: { ...currentUser, privacy_settings: payload.privacy_settings }
            })
    },
    [actions.fetchOtherUserSuccessful]: (state, payload) => updateObject(state, { otherUser: payload.user }),
    [actions.openLandingModel]: (state, payload) => updateObject(state, { isLandingModalOpen: true }),
    [actions.addFollowers]: (state, payload) => {
        const users = payload.users
        return updateObject(state,
            {
                followers: users
            })
    },
    [actions.addFollowingUsers]: (state, payload) => {
        const users = payload.users
        return updateObject(state,
            {
                following: users
            })
    },
    [actions.appendFollowers]: (state, payload) => {
        const users = payload.users
        let updatedUsers = [...state.followers, ...users];
        return updateObject(state,
            {
                followers: updatedUsers
            })
    },
    [actions.appendFollowingUsers]: (state, payload) => {
        const users = payload.users
        let updatedUsers = [...state.following, ...users];
        return updateObject(state,
            {
                following: updatedUsers
            })
    },
    [actions.toggleFollowers]: (state, payload) => {
        const enable = payload.enable
        return updateObject(state,
            {
                isOpeningFollowers: enable
            })
    },
    [actions.resetFollowersList]: (state, payload) => {
        return updateObject(state,
            {
                followers: [],
                following: []
            })
    },
}, initialState); // <-- This is the default state 
