import { createAction } from 'redux-act';

export const hashTagPending = createAction('Hash tag API started fetching');

export const hashTagSuccessful = createAction('Hash tag API successful', (hashtag) => (hashtag));

export const userhashTagPending = createAction('User Hash tag API started fetching');

export const userhashTagSuccessful = createAction(' User Hash tag API successful', (hashtag) => (hashtag));