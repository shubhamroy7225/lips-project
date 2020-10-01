import axios, { API_VERSION } from '../config';

export const getAllNotification = (name) => axios.get(`${API_VERSION}/notification`);