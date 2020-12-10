//import { AuthActionTypes } from './actionType';
import * as API from 'api/notificationAPI';
import * as commonService from "utility/utility";
import * as UserAPI from '../../../api/userAPI';

import  {rejectRequestSuccessful, acceptRequestPending, acceptRequestSuccessful, rejectRequestPending, markAsReadSuccessful, markAsReadPending, getAllNotificationPending, getAllNotificationSuccessful, getUnreadCountPending, getUnreadCountSuccessful} from 'redux/actions/notification';
import * as actions from 'redux/actions';

export const getAllNotification = (params) => {
  getAllNotificationPending();
  return API.getAllNotification(params)
      .then(response => {
        getAllNotificationSuccessful({...response.data, page: params.page})
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

export const acceptRequest = (id) => {
  commonService.isLoading.onNext(true);
  acceptRequestPending();
  return UserAPI.acceptRequest(id)
      .then(response => {
          commonService.isLoading.onNext(false);
          acceptRequestSuccessful({...response.data, notification_id: id});
          return response;
      })
      .catch(error => {
          console.log(error);
          return error;
      })
};
export const rejectRequest = (id) => {
  commonService.isLoading.onNext(true);
  rejectRequestPending();
  return UserAPI.rejectRequest(id)
      .then(response => {
          commonService.isLoading.onNext(false);
          rejectRequestSuccessful({...response.data, notification_id: id});
          return response;
      })
      .catch(error => {
          console.log(error);
          return error;
      })
};