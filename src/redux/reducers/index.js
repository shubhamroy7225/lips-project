import { combineReducers } from 'redux';
import { authReducer } from './auth/authReducer';
import { feedReducer } from './feeds/feedReducer';
import { notificationReducer } from './notification/notificationReducer';

const reducers = combineReducers({
        authReducer,
        feedReducer,
        notificationReducer
});

export default reducers;
