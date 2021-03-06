import storage from '../../../utility/storage';
import { createReducer } from 'redux-act';
import * as actions from 'redux/actions/feed';
import store from 'redux/store/store';
import { FeedModalType, routes } from 'utility/constants/constants';

let justBrowseTags = storage.get("justBrowseTags", {})

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}
const updateFeedObject = (posts, {data, id}) => {
    let index = posts.findIndex(ele => ele.id === id);    
    posts[index].has_hidden = true;
    posts[index].hidden_hashtags = data;
    return posts
}

const updateFeedRepostObject = (posts, {feedId, feed}) => {
    let index = posts.findIndex(ele => ele.id === feedId);    
    posts[index].is_reposted = true;
    posts[index].new_post = feed;
    return posts
}

const updateFeedRepostUndoObject = (posts, {id}) => {
    let index = posts.findIndex(ele => ele.id === id);    
    posts[index].is_reposted = false;
    posts[index].new_post = false;
    return posts
}
export const initialState = {
    hashTags: [],
    showhashTags: [],
    hideHashtag: [],

    feeds: [],
    page: 1, // for main feed initial page
    mainFeedIsPaginationCompleted: false,
    selectedFeed: null,

    userFeeds: [],
    count: 0,
    modalType: FeedModalType.undefined,
    userFeedPage: 1,
    profileFeedIsPaginationCompleted: false,

    otherUserFeeds: [],
    otherUserFeedPage: 1,
    otherUserProfileFeedsIsPaginationCompleted: false,

    likedFeeds: [],
    likedFeedsIsPaginationCompleted: false,
    likedFeedPage: 1, // for Liked feed page

    searchFeeds: [],
    searchPage: 1, // for search feed initial page
    searchFeedIsPaginationCompleted: false    
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
        hashTags: [],
        showhashTags: [],
        hideHashtag: [],

        feeds: [],
        page: 1, // for main feed initial page
        mainFeedIsPaginationCompleted: false,
        selectedFeed: null,

        userFeeds: [],
        userFeedPage: 1,
        profileFeedIsPaginationCompleted: false,
        modalType: FeedModalType.undefined,

        likedFeeds: [],
        otherUserFeeds: [],


        searchFeeds: [],
        searchPage: 1, // for search feed initial page
        searchFeedIsPaginationCompleted: false,

        justBrowseTags,
        hashTagSuggestionList: [],
        count: 0,
        changedFeedId: null
    }),
    [actions.setPage]: (state, payload) => updateObject(state, {
        page: payload.page,
    }),
    [actions.setSearchPage]: (state, payload) => updateObject(state, {
        searchPage: payload.page,
    }),
    [actions.likeFeedUpdate]: (state, payload) => {
        let { feedId } = payload;
        let feedsCopy = [...state.feeds, ...state.searchFeeds];
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
    [actions.fetchedNextPageLikedFeedsSuccessfully]: (state, payload) => {
        let feeds = [...state.likedFeeds, ...payload.feeds]
        return updateObject(state, {
            likedFeeds: feeds,
        })
    },

    [actions.fetchedUserFeedsSuccessfully]: (state, payload) => {
        return updateObject(state, {
            userFeeds: payload.feeds,
        })
    },
    [actions.fetchedUserFeedsNextPageSuccessfully]: (state, payload) => {
        let feeds = [...state.userFeeds, ...payload.feeds]
        return updateObject(state, {
            userFeeds: feeds,
        })
    },
    [actions.fetchedOtherUserFeedsSuccessfully]: (state, payload) => {
        return updateObject(state, { otherUserFeeds: payload.feeds })
    },
    [actions.fetchedOtherUserFeedsNextSuccessfully]: (state, payload) => {
        let feeds = [...state.otherUserFeeds, ...payload.feeds]
        return updateObject(state, { otherUserFeeds: feeds })
    },
    [actions.updateRepostFeed] :(state, {page, feedId, feed}) => {

        let key = (page === routes.EXPLORE) ? 'searchFeeds' : 'feeds';
        return updateObject(state, {
            [key]: updateFeedRepostObject([...state[key]], {feedId, feed})
        })
    },
    [actions.updateRepostUndoFeed]: (state,  {page, id}) => {
        let key = (page === routes.EXPLORE) ? 'searchFeeds' : 'feeds';
        return updateObject(state, {
            [key]: updateFeedRepostUndoObject([...state[key]], {id})
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

    [actions.updatePostHideHashtag] :(state, {page, id, data}) => {
        let key = (page === routes.EXPLORE) ? 'searchFeeds' : 'feeds';
        return updateObject(state, {
            [key]: updateFeedObject([...state[key]], {id, data}),
            changedFeedId: id
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
    },
    [actions.addSuggestedHashTagSuccessful]: (state, payload) => updateObject(state, {}),
    [actions.setHashTagJustBrowseSuccessful]: (state, payload) => updateObject(state, { justBrowseTags: { ...state.justBrowseTags, ...payload.hashtags } }),
    [actions.getHashTagSuggestionListPending]: (state, payload) => updateObject(state, { hashTagSuggestionList: [] }),
    [actions.getHashTagSuggestionListSuccessful]: (state, payload) => updateObject(state, { hashTagSuggestionList: payload.data }),

    [actions.setMainFeedPaginationCompleted]: (state, payload) => updateObject(state, { mainFeedIsPaginationCompleted: true })
    ,
    [actions.setSearchFeedPaginationCompleted]: (state, payload) => updateObject(state, { searchFeedIsPaginationCompleted: true }),
    [actions.resetSearchFeedPagination]: (state, payload) => updateObject(state, { searchFeedIsPaginationCompleted: false }),

    [actions.setProfileFeedPaginationCompleted]: (state, payload) => updateObject(state, { profileFeedIsPaginationCompleted: true }),
    [actions.resetProfileFeedPaginationCompleted]: (state, payload) => updateObject(state, { profileFeedIsPaginationCompleted: false }),
    [actions.setUserFeedPage]: (state, payload) => updateObject(state, {
        userFeedPage: payload.page,
    }),

    [actions.setOtherProfileFeedPaginationCompleted]: (state, payload) => updateObject(state, { otherUserProfileFeedsIsPaginationCompleted: true }),
    [actions.resetOtherProfileFeedPaginationCompleted]: (state, payload) => updateObject(state, { otherUserProfileFeedsIsPaginationCompleted: false }),
    [actions.setOtherUserFeedPage]: (state, payload) => updateObject(state, {
        otherUserFeedPage: payload.page,
    }),
    [actions.setLikedFeedPaginationCompleted]: (state, payload) => updateObject(state, { likedFeedsIsPaginationCompleted: true }),
    [actions.resetLikedFeedPagination]: (state, payload) => updateObject(state, { likedFeedsIsPaginationCompleted: false }),
    [actions.setLikedFeedPage]: (state, payload) => updateObject(state, {
        likedFeedPage: payload.page,
    }),

}, initialState); // <-- This is the default state


