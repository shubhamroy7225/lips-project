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
    showhashTags: [],
    hideHashtag: [],
    feeds: [],
    userFeeds: [],
    count: 0,
    selectedFeed: null,
    pageSize: 2,
    page: 1,
    modalType: FeedModalType.undefined,
    likedFeeds: [],
    otherUserFeeds: [],
    searchFeeds: [],
}

export const feedReducer = createReducer({
    [actions.hashTagPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.hashTagSuccessful]: (state, payload) => updateObject(state, {
        isloading: false, hashTags: [...state.hashTags, ...payload.hashtags], count: payload.count
    }),
    [actions.filterHashTagsSuccessful]: (state, payload) => updateObject(state, {
        isloading: false, hashTags: payload.hashtags, count: payload.count
    }),
    [actions.userhashTagPending]: (state) =>
        updateObject(state, { isloading: true }),
    [actions.userhashTagSuccessful]: (state, payload) => updateObject(state, {
        isloading: false, showhashTags: payload.show, hideHashtag: payload.hide
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
        let feedIndex = null;
        let feeds = [...state.feeds];
        let likedFeeds = [...state.likedFeeds];
        let userFeeds = [...state.userFeeds];
        if (feeds.length > 0) {
            feedIndex = feeds.findIndex(ele => ele.id === feedId);
            feedIndex >= 0 && feeds.splice(feedIndex, 1);
        }
        if (likedFeeds.length > 0) {
            feedIndex = likedFeeds.findIndex(ele => ele.id === feedId);
            feedIndex >= 0 && likedFeeds.splice(feedIndex, 1);
        }
        if (userFeeds.length > 0) {
            feedIndex = userFeeds.findIndex(ele => ele.id === feedId);
            feedIndex >= 0 && userFeeds.splice(feedIndex, 1);
        }
        return updateObject(state, {
            feeds: feeds,
            likedFeeds: likedFeeds,
            userFeeds: userFeeds
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
    [actions.fetchedOtherUserFeedsSuccessfully]: (state, payload) => updateObject(state, {
        otherUserFeeds: payload.feeds,
    }),
    [actions.updateRepostFeed]: (state, payload) => {
        let { feed } = payload;
        let feeds = [...state.feeds];
        let userFeeds = [...state.userFeeds];
        if (feeds.length > 0) {
            feeds = [feed, ...feeds]
        }
        if (userFeeds.length > 0) {
            userFeeds = [feed, ...userFeeds];
        }
        return updateObject(state, {
            feeds: feeds,
            userFeeds: userFeeds
        })
    },
    [actions.searchFeedsCompletedSuccessfully]: (state, payload) => updateObject(state, {
        searchFeeds: payload.feeds,
    }),
    [actions.addCreatedFeed]: (state, payload) => {
        let { feed } = payload;
        let feeds = [...state.feeds];
        let userFeeds = [...state.userFeeds];
        if (feeds.length > 0) {
            feeds = [feed, ...feeds]
        } else {
            feeds = [feed];
        }
        if (userFeeds.length > 0) {
            userFeeds = [feed, ...userFeeds];
        } else {
            userFeeds = [feed];
        }

        return updateObject(state, {
            feeds: feeds,
            userFeeds: userFeeds
        })
    },
}, initialState); // <-- This is the default state


