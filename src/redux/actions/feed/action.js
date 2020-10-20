import storage from '../../../utility/storage';
import * as API from '../../../api/feedsAPI';
import * as PostAPI from '../../../api/postAPI';
import * as commonService from "../../../utility/utility";
import { setHashTagJustBrowseSuccessful, getHashTagSuggestionListPending, getHashTagSuggestionListSuccessful, addSuggestedHashTagSuccessful, filterHashTagsSuccessful, fetchedFeedSuccessfully, hashTagPending, hashTagSuccessful, userhashTagPending, userhashTagSuccessful, nextPageFeeds, fetchedOtherUserFeedsSuccessfully, deleteFeedUpdate, updateRepostFeed, searchFeedsCompletedSuccessfully, addCreatedFeed, nextPageSearchFeeds } from 'redux/actions/feed';

import { fetchedLikedFeedsSuccessfully, fetchedUserFeedsSuccessfully, likeFeedUpdate, unlikeFeedUpdate, hideFeed } from 'redux/actions/feed';
import * as actions from 'redux/actions';

export const getAllHashTags = (params) => {
  commonService.isLoading.onNext(true);
  hashTagPending();
  return API.getAllHashTags(params)
    .then(response => {
      commonService.isLoading.onNext(false);
      hashTagSuccessful(response.data)
      return response
    })
}

export const getPostSearchHashTag = (params) => {
  getHashTagSuggestionListPending();
  return API.getAllHashTags(params)
    .then(response => {
      getHashTagSuggestionListSuccessful(response.data)
      return response
    })
}

export const filterHashTags = (credentials) => {
  commonService.isLoading.onNext(true);
  hashTagPending();
  return API.getAllHashTags(credentials)
    .then(response => {
      commonService.isLoading.onNext(false);
      filterHashTagsSuccessful(response.data)
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

export const setFavoriteAvoidTagsJustBrowse = async (data) => {
  commonService.isLoading.onNext(true);
  let justBrowseTags = storage.get("justBrowseTags", {})
  storage.set('justBrowseTags', {...justBrowseTags, ...data.hashtags});
  let res = await setHashTagJustBrowseSuccessful(data);
  commonService.isLoading.onNext(false);
  return res
}

export const getUserHashTags = (credentials) => {
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
      debugger;
      commonService.isLoading.onNext(false); // start loading
      if (response.data.success === true) {
        addCreatedFeed({ feed: response.data.post })
      }
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

export const likeAFeed = (feedId) => {
  return API.likeFeed(feedId)
    .then(response => {
      likeFeedUpdate({ feedId });
      return response;
    }).catch(error => {
      return error;
    })
}

export const unlikeAFeed = (feedId) => {
  return API.unlikeFeed(feedId)
    .then(response => {
      unlikeFeedUpdate({ feedId });
      return response;
    }).catch(error => {
      return error;
    })
}

export const fetchLikedFeeds = () => {
  return API.fetchLikedFeeds()
    .then(response => {
      fetchedLikedFeedsSuccessfully({ feeds: response.data.posts });
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const fetchUserFeeds = () => {
  return API.fetchUserFeeds()
    .then(response => {
      fetchedUserFeedsSuccessfully({ feeds: response.data.posts });
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const fetchOtherUserFeeds = (userId) => {
  return API.fetchOtherUserFeeds(userId)
    .then(response => {
      fetchedOtherUserFeedsSuccessfully({ feeds: response.data.posts });
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const deleteFeed = (feedId) => {
  return API.deleteFeed(feedId)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
      deleteFeedUpdate({ feedId })
      return response;
    }).catch(error => {
      return error;
    })
}

export const repostFeed = (feedId) => {
  return API.repostFeed(feedId)
    .then(response => {
      updateRepostFeed({ feed: response.data.post });
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const searchFeeds = (queryString, isNextPage = false) => {
  return API.searchFeeds(queryString)
    .then(response => {
      if (!isNextPage) {
        searchFeedsCompletedSuccessfully({ feeds: response.data.posts });
      } else {
        nextPageSearchFeeds({ feeds: response.data.posts });
      }
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}


export const hideAFeed = (feed) => {
  return API.hideFeed(feed.id)
    .then(response => {
      hideFeed({ feed });
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const reportAFeed = (feed) => {
  return API.reportFeed(feed.id)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
};

export const addSuggestedHashTag = (body) => {
  commonService.isLoading.onNext(true); // start loading
  getHashTagSuggestionListPending();
  return API.addSuggestedHashTag(body)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
        addSuggestedHashTagSuccessful(response.data);
      return response;
    }).catch(error => {
      return error;
    })
}
