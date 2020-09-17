//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/feedsAPI';
import * as PostAPI from '../../../api/postAPI';
import store from '../../../redux/store/store';
import { hashTagPending, hashTagSuccessful } from 'redux/actions/feed';
import * as actions from 'redux/actions';
import * as commonService from "utility/utility";

export const getAllHashTags = (credentials) => {
  store.dispatch(hashTagPending());
  return API.getAllHashTags(credentials)
    .then(response => {
      store.dispatch(hashTagSuccessful(response.data))
      return response
    })
}

export const setFavoriteAvoidTags = (credentials) => {
  store.dispatch(hashTagPending());
  return API.setFavoriteAvoidTags(credentials)
    .then(response => {
      return response;
    })
}

export const submitCreateFeedApprovalData = (request) => {
  commonService.isLoading.onNext(true); // start loading
  return PostAPI.submitCreateFeedApprovalData(request)
    .then(response => {
      actions.fetchUser();
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      commonService.isLoading.onNext(false); // start loading
      return error;
    })
}