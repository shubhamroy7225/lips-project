import storage from '../../../utility/storage';
import * as API from '../../../api/feedsAPI';
import * as PostAPI from '../../../api/postAPI';
import * as commonService from "../../../utility/utility";
import { fetchedNextPageLikedFeedsSuccessfully, setHashTagJustBrowseSuccessful, getHashTagSuggestionListPending, getHashTagSuggestionListSuccessful, addSuggestedHashTagSuccessful, filterHashTagsSuccessful, fetchedFeedSuccessfully, hashTagPending, hashTagSuccessful, userhashTagPending, userhashTagSuccessful, nextPageFeeds, fetchedOtherUserFeedsSuccessfully, deleteFeedUpdate, updateRepostFeed, updateRepostUndoFeed, searchFeedsCompletedSuccessfully, addCreatedFeed, nextPageSearchFeeds } from 'redux/actions/feed';

import {
  fetchedLikedFeedsSuccessfully,
  fetchedUserFeedsSuccessfully,
  fetchedUserFeedsNextPageSuccessfully,
  likeFeedUpdate,
  unlikeFeedUpdate,
  hideFeed,
  fetchedOtherUserFeedsNextSuccessfully
} from 'redux/actions/feed';
import { completeOnBorading } from "redux/actions/auth";

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
  return API.getPostSearchSuggestions(params)
    .then(response => {
        let data = response.data.data.length ? response.data : {data: [{name: 'No search result found', is_hashtag: true, disabled: true}]}
      getHashTagSuggestionListSuccessful(data)
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

export const setAvoidTags = (credentials) => {
  commonService.isLoading.onNext(true);
  hashTagPending();
  return API.setFavoriteAvoidTags(credentials)
    .then(response => {
      commonService.isLoading.onNext(false);
      storage.set('isOnBoard', true);
      completeOnBorading();
      return response;
    })
};

export const setFavoriteTags = (credentials) => {
  commonService.isLoading.onNext(true);
  hashTagPending();
  return API.setFavoriteAvoidTags(credentials)
    .then(response => {
      commonService.isLoading.onNext(false);
      return response;
    })
};

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
  storage.set('justBrowseTags', { ...justBrowseTags, ...data.hashtags });
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

export const submitAccessCodeData = (request) => {
  commonService.isLoading.onNext(true); // start loading
  return PostAPI.submitAccessCode(request)
    .then(response => {
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
      if (response.data.success === true) {
        addCreatedFeed({ feed: response.data.post })
      }
      return response;
    }).catch(error => {
      commonService.isLoading.onNext(false); // start loading
      return error;
    })
}

export const fetchFeeds = (queryString, isFirstPage) => {
  return API.fetchFeeds(queryString)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
      if (isFirstPage) {
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

export const fetchFeedsForNonRegUser = (request, isFirstPage, queryString) => {
  return API.fetchFeedsForNonRegUser(request, queryString)
    .then(response => {
      commonService.isLoading.onNext(false); // start loading
      if (isFirstPage) {
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

export const fetchLikedFeeds = (queryString, isFirstPage = true) => {
  return API.fetchLikedFeeds(queryString)
    .then(response => {
      if (isFirstPage) {
        fetchedLikedFeedsSuccessfully({ feeds: response.data.posts });
      } else {
        fetchedNextPageLikedFeedsSuccessfully({ feeds: response.data.posts });
      }
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const fetchUserFeeds = (queryString, isFirstPage = true) => {
  return API.fetchUserFeeds(queryString)
    .then(response => {
      if (isFirstPage) {
        fetchedUserFeedsSuccessfully({ feeds: response.data.posts });
      } else {
        fetchedUserFeedsNextPageSuccessfully({ feeds: response.data.posts });
      }
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const fetchOtherUserFeeds = (userId, queryString, isFirstPage = true) => {
  return API.fetchOtherUserFeeds(userId, queryString)
    .then(response => {
      if (isFirstPage) {
        fetchedOtherUserFeedsSuccessfully({ feeds: response.data.posts });
      } else {
        fetchedOtherUserFeedsNextSuccessfully({ feeds: response.data.posts });
      }
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

export const repostFeed = (feedId, page) => {
  return API.repostFeed(feedId)
    .then(response => {
      updateRepostFeed({ feed: response.data.post,  feedId, page   });
      commonService.isLoading.onNext(false); // start loading
      return response;
    }).catch(error => {
      return error;
    })
}

export const repostUndoFeed = (feedId, page, id) => {
  return API.repostUndoFeed(feedId)
    .then(response => {
      updateRepostUndoFeed({ page, id });
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
