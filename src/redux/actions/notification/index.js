import { createAction } from 'redux-act';

export const getAllNotificationPending = createAction('Notification API started fetching');
export const getAllNotificationSuccessful = createAction('Notification API fetched data successfully', (notifications) => (notifications));

export const getUnreadCountPending = createAction('Notification unread API started fetching');
export const getUnreadCountSuccessful = createAction('Notification unread API fetched data successfully', (count) => (count));
export const clearNotifications = createAction('Notification clear successfully');
export const markAsReadPending = createAction('Notification clear successfully');
export const markAsReadSuccessful = createAction('Notification clear successfully', (res) => res);


export const acceptRequestPending = createAction('Accept user follow request pending');
export const acceptRequestSuccessful = createAction('Accept user follow request successful', (id) => (id));
export const rejectRequestPending = createAction('Reject user follow request pending');
export const rejectRequestSuccessful = createAction('Reject user follow request successful', (id) => (id));