//import { AuthActionTypes } from './actionType';
import * as API from 'api/notificationAPI';
import * as commonService from "utility/utility";

import * as notificationAction from 'redux/actions/notification';
import * as actions from 'redux/actions';

export const getAllNotification = (credentials) => {
  commonService.isLoading.onNext(true);
  getAllNotificationPending();
  return API.getAllNotification(credentials)
      .then(response => {
        commonService.isLoading.onNext(false);
        getAllNotificationSuccessful(response.data)
        return response
      })
}