import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { feedsReducer } from './feeds/feedsReducer';

const reducers = combineReducers({
        authReducer,
        feedsReducer,
});

export default reducers;
