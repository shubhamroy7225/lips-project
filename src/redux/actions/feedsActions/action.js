//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/feedsAPI';
import storage from '../../../utility/storage';
import { toastMsg } from '../../../utility/utility';
import { routes } from '../../../utility/constants/constants';
import store from '../../../redux/store/store';
import { hashTagPending, hashTagSuccessful } from 'redux/reducers/feeds/feedsReducer';
//import store from 'redux/store/store';

function getHistory() {
  const storeState = store.getState();
  const history = storeState.historyReducer.history;
  return history;
}

export const getAllHashTags = (credentials) =>  {
  store.dispatch(hashTagPending());
  return API.getAllHashTags(credentials)
      .then(response => {
        if (response.data.error || response.data.code) {
          //errorHandler(response.data);
        }
        else {
          store.dispatch(hashTagSuccessful(response.data))
        }
      }).catch(error => {
        console.log(error);
        // errorHandler(error);
        return error;
      })
}
export const setFavoriteAvoidTags = (credentials) =>  {
  store.dispatch(hashTagPending());
  return API.setFavoriteAvoidTags(credentials)
      .then(response => {
        if (response.data.error || response.data.code) {
          //errorHandler(response.data);
        }
        else {
          store.dispatch(hashTagSuccessful(response.data))
        }
      }).catch(error => {
        console.log(error);
        // errorHandler(error);
        return error;
      })
}