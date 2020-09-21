import storage from '../../../utility/storage';
import { createReducer } from 'redux-act';
import * as actions from 'redux/actions/feed';
import store from 'redux/store/store';

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}


export const initialState = {
    hashTags: [],
    hideHashtag: []
}

export const feedReducer = createReducer({
    [actions.hashTagPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.hashTagSuccessful]: (state, payload) =>   updateObject(state, {
        isloading: false, hashTags: payload.hashtags,
    }),

    [actions.userhashTagPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.userhashTagSuccessful]: (state, payload) =>   updateObject(state, {
        isloading: false, hashTags: payload.show, hideHashtag: payload.hide
    })
}, initialState); // <-- This is the default state


