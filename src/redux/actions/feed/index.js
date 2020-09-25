import { createAction } from 'redux-act';

export const hashTagPending = createAction('Hash tag API started fetching');

export const hashTagSuccessful = createAction('Hash tag API successful', (hashtag) => (hashtag));

export const fetchedFeedSuccessfully = createAction('fetch feed completed with success', (feeds) => (feeds));

export const clearAllFeeds = createAction('clear all feeds');

export const nextPageFeeds = createAction('fetch feeds for next page completed with success', (feeds) => (feeds));

export const setPage = createAction('set page for feed pagination', (page) => (page));

export const likeFeedUpdate = createAction('update the feed response on successful like', (feedId) => (feedId));

export const unlikeFeedUpdate = createAction('update the feed response on successful unlike', (feedId) => (feedId));

export const deleteFeedUpdate = createAction('delete the feed from the feeds response on successful delete', (feedId) => (feedId));
