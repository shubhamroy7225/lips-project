import { createAction } from 'redux-act';

//actions
export const loginPending = createAction('Login API started fetching');
export const loginSuccessful = createAction('Login API successful', (user) => ({ user }));
export const signupPending = createAction('Sign up API started fetching');
export const signupSuccessful = createAction('Sign up API successful', (user) => ({ user }));
export const authorizeUser = createAction('Authorize user after authentication', (user, token, refresh_token) => ({ user, token, refresh_token }));
export const updateUser = createAction('Update user after authentication', (user) => ({ user }));
export const logout = createAction('Update user after authentication');
export const completeOnBorading = createAction('Complete on boarding flow');
export const allowedToPost = createAction('Approved to post feeds');
export const changePrivacyPending = createAction('Change Privacy policy of user');
export const changePrivacySuccessful = createAction('Change Privacy policy of user successful');
