import storage from '../../../utility/storage';
import { createReducer } from 'redux-act';
import * as actions from 'redux/actions/notification';
import store from 'redux/store/store';
import { FeedModalType } from 'utility/constants/constants';

const updateObject = (oldState, updatedProps) => {
  return {
    ...oldState,
    ...updatedProps
  }
}


export const initialState = {
  notifications: [],
  count: 0,
  notificationCount: 0
}

export const notificationReducer = createReducer({
  [actions.getAllNotificationPending]: (state) =>
      updateObject(state, { isloading: true }),
  [actions.getAllNotificationSuccessful]: (state, payload) => updateObject(state, {
    isloading: false, notifications: [...state.notifications, ...payload.notifications], count: payload.count
  }),
  [actions.getUnreadCountPending]: (state) =>
      updateObject(state, { isloading: true }),
  [actions.getUnreadCountSuccessful]: (state, payload) => updateObject(state, {
    isloading: false, notificationCount: payload.count
  })

}, initialState); // <-- This is the default state


