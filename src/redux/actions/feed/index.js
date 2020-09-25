import { createAction } from 'redux-act';

export const hashTagPending = createAction('Hash tag API started fetching');

export const hashTagSuccessful = createAction('Hash tag API successful', (hashtag) => (hashtag));

export const userhashTagPending = createAction('User tag API started fetching');

export const userhashTagSuccessful = createAction(' User tag API successful', (hashtag) => (hashtag));

export const fetchedFeedSuccessfully = createAction('fetch feed completed with success', (feeds) => (feeds));

export const clearAllFeeds = createAction('clear all feeds');

export const nextPageFeeds = createAction('fetch feeds for next page completed with success', (feeds) => (feeds));
