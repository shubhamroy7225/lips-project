import axios, { API_VERSION } from '../config';

export const getAllHashTags = () => axios.get(API_VERSION + '/hashtag');