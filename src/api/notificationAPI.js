import axios, { API_VERSION } from '../config';

export const getAllNotification = (params) => axios.get(`${API_VERSION}/notification`, {params});
export const getUnreadCount = () => axios.get(`${API_VERSION}/notification/unread`);
export const markAsRead = (id) => axios.put(`${API_VERSION}/notification/${id}/read`);