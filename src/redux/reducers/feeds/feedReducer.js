import storage from '../../../utility/storage';
import { createReducer } from 'redux-act';
import * as actions from 'redux/actions/feed';
import store from 'redux/store/store';
import { FeedModalType } from 'utility/constants/constants';

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}


export const initialState = {
    hashTags: [],
    feeds: [],
    selectedFeed: null,
    userFeeds: [],
    pageSize: 2,
    page: 1,
    modalType: FeedModalType.undefined,
    likedFeeds: [],
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
    }),
    [actions.likeFeedUpdate]: (state, payload) => {
        let { feedId } = payload;
        let feedsCopy = [...state.feeds];
        let feedIndex = feedsCopy.findIndex(ele => ele.id === feedId);
        feedsCopy[feedIndex].liked = true;
        return updateObject(state, {
            feeds: feedsCopy
        })
    },
    [actions.unlikeFeedUpdate]: (state, payload) => {
        let { feedId } = payload;
        let feedsCopy = [...state.feeds];
        let feedIndex = feedsCopy.findIndex(ele => ele.id === feedId);
        feedsCopy[feedIndex].liked = false;
        return updateObject(state, {
            feeds: feedsCopy
        })
    },
    [actions.deleteFeedUpdate]: (state, payload) => {
        let { feedId } = payload;
        let feedIndex = state.feeds.findIndex(ele => ele.id === feedId);
        let updatedFeeds = [...state.feeds]
        updatedFeeds.splice(feedIndex, 1);
        return updateObject(state, {
            feeds: updatedFeeds
        })
    },
    [actions.setSelectedFeed]: (state, payload) => {
        return updateObject(state, {
            selectedFeed: payload.feed
        })
    },
    [actions.setFeedModalType]: (state, payload) => {
        return updateObject(state, {
            modalType: payload.modalType
        })
    },
    [actions.fetchedLikedFeedsSuccessfully]: (state, payload) => updateObject(state, {
        likedFeeds: payload.feeds,
    }),
    [actions.fetchedUserFeedsSuccessfully]: (state, payload) => updateObject(state, {
        userFeeds: payload.feeds,
    }),
}, initialState); // <-- This is the default state
