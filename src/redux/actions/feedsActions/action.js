//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/feedsAPI';
import store from '../../../redux/store/store';
import { hashTagPending, hashTagSuccessful } from 'redux/actions/feed';

export const getAllHashTags = (credentials) =>  {
  store.dispatch(hashTagPending());
  return API.getAllHashTags(credentials)
      .then(response => {
        store.dispatch(hashTagSuccessful(response.data))
        return response
      })
}
export const setFavoriteAvoidTags = (credentials) =>  {
  store.dispatch(hashTagPending());
  return API.setFavoriteAvoidTags(credentials)
      .then(response => {
        return response;
      })
}