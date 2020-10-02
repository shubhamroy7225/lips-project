import { createAction } from 'redux-act';

export const getAllNotificationPending = createAction('Notification API started fetching');
export const getAllNotificationSuccessful = createAction('Notification API fetched data successfully', (notifications) => (notifications));

export const getUnreadCountPending = createAction('Notification unread API started fetching');
export const getUnreadCountSuccessful = createAction('Notification unread API fetched data successfully', (count) => (count));
export const clearNotifications = createAction('Notification clear successfully');
export const markAsReadPending = createAction('Notification clear successfully');
export const markAsReadSuccessful = createAction('Notification clear successfully', (res) => res);