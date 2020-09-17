//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/feedsAPI';
import store from '../../../redux/store/store';
import * as commonService from "../../../utility/utility";
import { hashTagPending, hashTagSuccessful } from 'redux/actions/feed';

export const getAllHashTags = (credentials) =>  {
  commonService.isLoading.onNext(true);
  store.dispatch(hashTagPending());
  return API.getAllHashTags(credentials)
      .then(response => {
        commonService.isLoading.onNext(false);
        store.dispatch(hashTagSuccessful(response.data))
        return response
      })
}
export const setFavoriteAvoidTags = (credentials) =>  {
  commonService.isLoading.onNext(true);
  store.dispatch(hashTagPending());
  return API.setFavoriteAvoidTags(credentials)
      .then(response => {
        commonService.isLoading.onNext(false);
        return response;
      })
}