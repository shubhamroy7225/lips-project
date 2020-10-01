import { createAction } from 'redux-act';

export const getAllNotificationPending = createAction('Notification API started fetching');
export const getAllNotificationSuccessful = createAction('Notification API fetched data successfully', (notifications) => (notifications));