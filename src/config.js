import axios from 'axios';

export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = ''
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = ''
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = ''
  }
  return url;
};

export const API_VERSION = "api/v1/"

const instance = axios.create({
  baseURL: BASE_URL()
});

export default instance;