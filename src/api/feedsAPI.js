import axios, { API_VERSION } from '../config';

export const getAllHashTags = () => axios.get(API_VERSION + '/hashtag');

export const setFavoriteAvoidTags = (body) => axios.put(API_VERSION + '/user/settings/hashtag', body);

export const createFeed = (request) => {
    return axios.post(`${API_VERSION}/post`, request)
};
