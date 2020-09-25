//import { AuthActionTypes } from './actionType';
import * as API from '../../../api/feedsAPI';
import * as PostAPI from '../../../api/postAPI';
import store from '../../../redux/store/store';
import * as commonService from "../../../utility/utility";
import { fetchedFeedSuccessfully, hashTagPending, hashTagSuccessful,userhashTagPending, userhashTagSuccessful, nextPageFeeds } from 'redux/actions/feed';
import * as actions from 'redux/actions';

export const getAllHashTags = (credentials) => {
  commonService.isLoading.onNext(true);
  hashTagPending();
  return API.getAllHashTags(credentials)
    .then(response => {
      commonService.isLoading.onNext(false);
      hashTagSuccessful(response.data)
      return response
    })
}

export const setFavoriteAvoidTags = (credentials) => {
  commonService.isLoading.onNext(true);
  hashTagPending();
  return API.setFavoriteAvoidTags(credentials)
    .then(response => {
      commonService.isLoading.onNext(false);
      return response;
    })
}

export const getUserHashTags = (credentials) =>  {
  commonService.isLoading.onNext(true);
  userhashTagPending();
  return API.getUserHashTags(credentials)
      .then(response => {
        commonService.isLoading.onNext(false);
       userhashTagSuccessful(response.data)
        return response
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

export const createFeed = (request) => {
  commonService.isLoading.onNext(true); // start loading
  return API.createFeed(request)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      commonService.isLoading.onNext(false); // start loading
      return error;
    })
}

export const fetchFeeds = (queryString = "?limit=20&page=1") => {
  return API.fetchFeeds(queryString)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
      if (queryString.length === 0) {
        fetchedFeedSuccessfully({ feeds: response.data.posts });
      } else {
        nextPageFeeds({ feeds: response.data.posts });
      }
      return response;
    }).catch(error => {
      commonService.isLoading.onNext(false); // start loading
      return error;
    })
}