import { createAction } from 'redux-act';

export const hashTagPending = createAction('Hash tag API started fetching');

export const hashTagSuccessful = createAction('Hash tag API successful', (hashtag) => (hashtag));