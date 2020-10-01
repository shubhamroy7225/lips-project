import { createAction } from 'redux-act';

export const getAllNotificationPending = createAction('Hash tag API started fetching');
export const getAllNotificationSuccessful = createAction('Hash tag API started fetching', (notifications) => (notifications));