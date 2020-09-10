import storage from '../../../utility/storage';
import { createAction, createReducer } from 'redux-act';
import store from 'redux/store/store';

const updateObject = (oldState, updatedProps) => {
    return {
        ...oldState,
        ...updatedProps
    }
}


export const initialState = {
}

export const feedReducer = createReducer({

}, initialState); // <-- This is the default state
