import { createAction } from 'redux-act';

//actions
export const loginPending = createAction('Login API started fetching');
export const loginSuccessful = createAction('Login API successful', (user) => ({ user }));
export const signupPending = createAction('Sign up API started fetching');
export const signupSuccessful = createAction('Sign up API successful', (user) => ({ user }));
export const authorizeUser = createAction('Authorize user after authentication', (user, token, refresh_token) => ({ user, token, refresh_token }));
export const updateUser = createAction('Update user after authentication', (user) => ({ user }));
export const logout = createAction('Logout current user');
export const completeOnBorading = createAction('Complete on boarding flow');
export const allowedToPost = createAction('Approved to post feeds');
export const changePrivacyPending = createAction('Change Privacy policy of user');
export const changePrivacySuccessful = createAction('Change Privacy policy of user successful');
export const forgotpasswordPending = createAction('forgot password API started fetching');
export const forgotpasswordSuccessful = createAction('forgot password API successful');
export const resetpasswordPending = createAction('reset password API started fetching');
export const resetpasswordSuccessful = createAction('reset password API successful');
export const updateuserPending = createAction('update user API started fetching');
export const updateuserSuccessful = createAction('update user API successful');
export const deleteuserPending = createAction('delete user API started fetching');
export const deleteuserSuccessful = createAction('delete user API successful');
export const configPending = createAction('config API started fetching');
export const configSuccessful = createAction('config API API successful');
export const getUserPending = createAction('get User pending');
export const getUserSuccessful = createAction('get User successful');
export const refreshTokenPending = createAction('get Refresh token pending');
export const refreshTokenSuccessful = createAction('get Refresh token successful');
export const fetchOtherUserSuccessful = createAction('get User successful', (user) => (user));
export const getBlockUserPending = createAction('get Block User pending');
export const getBlockUserSuccessful = createAction('get Block User successful');
export const unblockUserPending = createAction('get Block User pending');
export const unblockUserSuccessful = createAction('get Block User successful', (id) => (id));

export const acceptRequestPending = createAction('Accept user follow request pending');
export const acceptRequestSuccessful = createAction('Accept user follow request successful', (id) => (id));
export const rejectRequestPending = createAction('Reject user follow request pending');
export const rejectRequestSuccessful = createAction('Reject user follow request successful', (id) => (id));
