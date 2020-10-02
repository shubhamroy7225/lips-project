//import { AuthActionTypes } from './actionType';
import * as API from 'api/notificationAPI';
import * as commonService from "utility/utility";

import  {markAsReadSuccessful, markAsReadPending, getAllNotificationPending, getAllNotificationSuccessful, getUnreadCountPending, getUnreadCountSuccessful} from 'redux/actions/notification';
import * as actions from 'redux/actions';

export const getAllNotification = (params) => {
  getAllNotificationPending();
  return API.getAllNotification(params)
      .then(response => {
        getAllNotificationSuccessful(response.data)
        return response
      })
}
export const getUnreadCount = (params) => {
  getUnreadCountPending();
  return API.getUnreadCount(params)
      .then(response => {
        getUnreadCountSuccessful(response.data)
        return response
      })
}
export const markAsRead = (id) => {
  markAsReadPending();
  return API.markAsRead(id)
      .then(response => {
        markAsReadSuccessful({id})
        return response
      })
}