import axios, { API_VERSION } from '../config';

export const getAllHashTags = (params) => axios.get(API_VERSION + '/hashtag', { params });

export const getUserHashTags = () => axios.get(API_VERSION + '/user/settings/hashtag');

export const setFavoriteAvoidTags = (body) => axios.put(API_VERSION + '/user/settings/hashtag', body);

export const addSuggestedHashTag = (body) => axios.post(API_VERSION + '/user/settings/hashtag/suggest', body);

export const createFeed = (request) => axios.post(`${API_VERSION}/post`, request);

export const fetchFeed = (feedID) => axios.get(`${API_VERSION}/post/${feedID}`);

export const deleteFeed = (feedID) => axios.delete(`${API_VERSION}/post/${feedID}`);

export const repostFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/repost`);

export const likeFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/like`);

export const unlikeFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/unlike`);

export const fetchLikedFeeds = (queryString = "") => axios.get(`${API_VERSION}/post/liked${queryString}`);

export const fetchUserFeeds = (queryString) => axios.get(`${API_VERSION}/post/self${queryString}`);

export const fetchOtherUserFeeds = (userID, queryString) => axios.get(`${API_VERSION}/post/user/${userID}${queryString}`);

export const fetchFeeds = (queryString = "") => axios.get(`${API_VERSION}/post${queryString}`)

export const fetchFeedsForNonRegUser = (request, queryString) => axios.put(`${API_VERSION}/post/hashtag${queryString}`, request)

export const hideFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/hide`);

export const reportFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/report`);

export const searchFeeds = (queryString = "") => {
    // debugger;
    return axios.get(`${API_VERSION}/post/search${queryString}`)
}