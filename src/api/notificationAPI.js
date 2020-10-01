import axios, { API_VERSION } from '../config';

export const getAllNotifications = (name) => axios.get(`${API_VERSION}/notification`);