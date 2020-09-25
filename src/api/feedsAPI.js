import axios, { API_VERSION } from '../config';

export const getAllHashTags = () => axios.get(API_VERSION + '/hashtag');

export const getUserHashTags = () => axios.get(API_VERSION + '/user/settings/hashtag');

export const setFavoriteAvoidTags = (body) => axios.put(API_VERSION + '/user/settings/hashtag', body);

export const createFeed = (request) => axios.post(`${API_VERSION}/post`, request);

export const fetchFeeds = (queryString = "") => axios.get(`${API_VERSION}/post${queryString}`)

export const fetchFeed = (feedID) => axios.get(`${API_VERSION}/post/${feedID}`);

export const deleteFeed = (feedID) => axios.delete(`${API_VERSION}/post/${feedID}`);

export const repostFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/respost`);

export const likeFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/like`);

export const unlikeFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/unlike`);

export const hideFeed = (feedID) => axios.put(`${API_VERSION}/post/${feedID}/hide`);

