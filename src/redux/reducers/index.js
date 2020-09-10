import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { feedReducer } from './feeds/feedReducer';

const reducers = combineReducers({
        authReducer,
        feedReducer
});

export default reducers;
