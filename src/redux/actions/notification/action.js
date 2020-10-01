//import { AuthActionTypes } from './actionType';
import * as API from 'api/notificationAPI';
import * as commonService from "utility/utility";

import  {getAllNotificationPending, getAllNotificationSuccessful} from 'redux/actions/notification';
import * as actions from 'redux/actions';

export const getAllNotification = (params) => {
  getAllNotificationPending();
  return API.getAllNotification(params)
      .then(response => {
        getAllNotificationSuccessful(response.data)
        return response
      })
}