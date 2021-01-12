import { createAction } from 'redux-act';

export const hashTagPending = createAction('Hash tag API started fetching');

export const hashTagSuccessful = createAction('Hash tag API successful', (hashtag) => (hashtag));

export const filterHashTagsSuccessful = createAction('Filter Hash tag API successful', (hashtag) => (hashtag));

export const userhashTagPending = createAction('User tag API started fetching');

export const userhashTagSuccessful = createAction(' User tag API successful', (hashtag) => (hashtag));

export const fetchedFeedSuccessfully = createAction('fetch feed completed with success', (feeds) => (feeds));

export const clearAllFeeds = createAction('clear all feeds');

export const nextPageFeeds = createAction('fetch feeds for next page completed with success', (feeds) => (feeds));

export const setPage = createAction('set page for feed pagination', (page) => (page));

export const likeFeedUpdate = createAction('update the feed response on successful like', (feedId) => (feedId));

export const unlikeFeedUpdate = createAction('update the feed response on successful unlike', (feedId) => (feedId));

export const deleteFeedUpdate = createAction('delete the feed from the feeds response on successful delete', (feedId) => (feedId));

export const setSelectedFeed = createAction('set selected feed - in case of feed widgets option', (feed) => (feed));

export const setFeedModalType = createAction('set modal type to open from feed widget', (modalType) => (modalType));

export const fetchedLikedFeedsSuccessfully = createAction('fetch most liked feeds with success', (feeds) => (feeds));
export const fetchedNextPageLikedFeedsSuccessfully = createAction('fetch next page liked feeds with success', (feeds) => (feeds));

export const fetchedUserFeedsSuccessfully = createAction('fetch user feeds with success', (feeds) => (feeds));
export const fetchedUserFeedsNextPageSuccessfully = createAction('fetch User Feeds Next Page Successfully', (feeds) => (feeds));

export const fetchedOtherUserFeedsSuccessfully = createAction('fetch other user feeds with success', (feeds) => (feeds));
export const fetchedOtherUserFeedsNextSuccessfully = createAction('fetch other user feeds next success', (feeds) => (feeds));

export const updateRepostFeed = createAction('update repost feed', (feed) => (feed));

export const updatePostHideHashtag = createAction('update hide hashtag feed', (feedId) => (feedId));


export const addCreatedFeed = createAction('update repost feed', (feed) => (feed));

export const hideFeed = createAction('hide feed', (feed) => (feed));

export const hideFeedsOnBlockingUser = createAction('hide feed on blocking user', (user) => (user));

export const hideFeedsOnUnfollowingUser = createAction('hide feed on unfollow user', (user) => (user));

export const searchFeedsCompletedSuccessfully = createAction('search feeds completed with success', (feeds) => (feeds));

export const setSearchPage = createAction('set search page for feed pagination', (page) => (page));

export const nextPageSearchFeeds = createAction('fetch search feeds for next page completed with success', (feeds) => (feeds));

export const addSuggestedHashTagSuccessful = createAction('Add tag in suggested hash tag list', (tags) => (tags));


export const setHashTagJustBrowseSuccessful = createAction('Set tag in storage for just browse', (tags) => (tags));

export const getHashTagSuggestionListPending = createAction('get tag in for search post list pending', (tags) => (tags));

export const getHashTagSuggestionListSuccessful = createAction('get tag in for search post list success', (tags) => (tags));

export const setMainFeedPaginationCompleted = createAction('setIsMainFeedPaginationCompleted');
export const setSearchFeedPaginationCompleted = createAction('setSearchFeedPaginationCompleted');
export const resetSearchFeedPagination = createAction('resetSearchFeedPagination');

export const setProfileFeedPaginationCompleted = createAction('setProfileFeedPaginationCompleted');
export const resetProfileFeedPaginationCompleted = createAction('resetProfileFeedPaginationCompleted');
export const setUserFeedPage = createAction('setUserFeedPage', (page) => (page));

export const setOtherProfileFeedPaginationCompleted = createAction('setOtherProfileFeedPaginationCompleted');
export const resetOtherProfileFeedPaginationCompleted = createAction('resetOtherProfileFeedPaginationCompleted');
export const setOtherUserFeedPage = createAction('setOtherUserFeedPage', (page) => (page));

export const setLikedFeedPaginationCompleted = createAction('setLikedFeedPaginationCompleted');
export const resetLikedFeedPagination = createAction('resetLikedFeedPagination');
export const setLikedFeedPage = createAction('setLikedFeedPage', (page) => (page));
