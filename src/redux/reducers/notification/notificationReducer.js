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
let notifications, index;
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
  }),
  [actions.markAsReadPending]: (state) =>
      updateObject(state, { isloading: true }),
  [actions.markAsReadSuccessful]: (state, payload) => 
    updateObject(state, {
      isloading: false, notificationCount: 0
    }),
  [actions.clearNotifications]: (state, payload) => updateObject(state, {
    isloading: false, notificationCount: 0, notifications: [], count: 0
  }),

  [actions.acceptRequestPending]: (state, payload) => updateObject(state, {isloading: true}),
  [actions.acceptRequestSuccessful]: (state, payload) => {
    updateNotifications(state, payload);
    return updateObject(state, {
    isloading: false, notifications, count: state.count-1
  })},
  [actions.rejectRequestPending]: (state, payload) => updateObject(state, {}),
  [actions.rejectRequestSuccessful]: (state, payload) => {
    updateNotifications(state, payload);
    return updateObject(state, {
    isloading: false, notifications, count: state.count-1
  })},


}, initialState); // <-- This is the default state


const updateNotifications = (state, payload) => {
  notifications = [...state.notifications];  
    notifications.splice(notifications.findIndex(e => e.follow && (e.follow.id === payload.notification_id)), 1);
}