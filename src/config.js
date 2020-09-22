import axios from 'axios';

export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = "http://lips-api.bitcotapps.com";
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = "https://stage-api.lips.social";
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = "https://stage-api.lips.social";
  }
  return url;
};

export const API_VERSION = "/v1"

const instance = axios.create({
  baseURL: BASE_URL()
});

export default instance;