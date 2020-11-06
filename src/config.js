import axios from 'axios';

export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = "https://stage-api.lips.social";
  } else if (process.env.REACT_APP_ENV === 'staging') {
    url = "https://stage-api.lips.social";
  } else if (process.env.REACT_APP_ENV === 'production') {
    url = "https://api.lips.social";
  } else {
    url = "https://stage-api.lips.social";
  }
  return url;
};

export const API_VERSION = "/v1"

const instance = axios.create({
  baseURL: BASE_URL()
});

export default instance;