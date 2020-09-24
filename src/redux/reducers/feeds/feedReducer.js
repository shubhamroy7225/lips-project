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
    feeds: [],
    userFeeds: [],
    pageSize: 2,
    page: 1
}

export const feedReducer = createReducer({
    [actions.hashTagPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.hashTagSuccessful]: (state, payload) => updateObject(state, {
        hashTags: payload.hashtags,
    }),
    [actions.fetchedFeedSuccessfully]: (state, payload) => updateObject(state, {
        feeds: payload.feeds,
    }),
    [actions.nextPageFeeds]: (state, payload) => {
        let updatedFeeds = [...state.feeds, ...payload.feeds];
        return updateObject(state, {
            feeds: updatedFeeds,
        })
    },
    [actions.clearAllFeeds]: (state, payload) => updateObject(state, {
        feeds: [],
    }),
    [actions.setPage]: (state, payload) => updateObject(state, {
        page: payload.page,
    })
}, initialState); // <-- This is the default state
