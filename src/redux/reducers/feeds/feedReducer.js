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
    pageSize: 20,
    page: 1,
    modalType: FeedModalType.undefined,
    likedFeeds: [],
    otherUserFeeds: [],
    searchFeeds: [],
    searchPage: 1,
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
    [actions.setSearchPage]: (state, payload) => updateObject(state, {
        searchPage: payload.page,
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
    [actions.nextPageSearchFeeds]: (state, payload) => {
        let updatedFeeds = [...state.searchFeeds, ...payload.feeds];
        return updateObject(state, {
            searchFeeds: updatedFeeds,
        })
    },
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
    [actions.hideFeed]: (state, payload) => {
        let { feed } = payload;
        let feeds = [...state.feeds];
        let feedIndex = feeds.findIndex(ele => ele.id === feed.id);
        feedIndex >= 0 && feeds.splice(feedIndex, 1);

        let searchFeeds = [...state.searchFeeds];
        feedIndex = searchFeeds.findIndex(ele => ele.id === feed.id);
        feedIndex >= 0 && searchFeeds.splice(feedIndex, 1);

        let likedFeeds = [...state.likedFeeds];
        feedIndex = likedFeeds.findIndex(ele => ele.id === feed.id);
        feedIndex >= 0 && likedFeeds.splice(feedIndex, 1);
        return updateObject(state, {
            feeds: feeds,
            likedFeeds: likedFeeds,
            searchFeeds: searchFeeds
        })
    },
    [actions.hideFeedsOnBlockingUser]: (state, payload) => {
        let { user } = payload;

        let feeds = [...state.feeds];
        feeds = feeds.filter(feed => feed.user.id !== user.id);

        let likedFeeds = [...state.likedFeeds];
        likedFeeds = likedFeeds.filter(feed => feed.user.id !== user.id);
        return updateObject(state, {
            feeds: feeds,
            likedFeeds: likedFeeds
        })
    },
    [actions.hideFeedsOnUnfollowingUser]: (state, payload) => {
        let { user } = payload;
        let feeds = [...state.feeds];
        feeds = feeds.filter(feed => feed.user.id !== user.id);
        return updateObject(state, {
            feeds: feeds
        })
    }
}, initialState); // <-- This is the default state


