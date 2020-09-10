import storage from '../../../utility/storage';
import store from 'redux/store/store';
import { createAction, createReducer } from 'redux-act';

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}

//actions
export const hashTagPending = createAction('Hash tag API started fetching');
export const hashTagSuccessful = createAction('Hash tag API successful', (hashtag) => (hashtag));

hashTagPending.assignTo(store);
hashTagSuccessful.assignTo(store);


export const initialState = {
    hashTags: [],
}

export const feedsReducer = createReducer({
    [hashTagPending]: (state) =>
        updateObject(state, { isloading: true }),
    [hashTagSuccessful]: (state, payload) =>   updateObject(state, {
            isloading: false, hashTags: payload.hashtags,
        })

}, initialState); // <-- This is the default state
