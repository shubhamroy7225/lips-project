import axios from 'axios';
import storage from 'utility/storage';
import successHandler from "./utility/successHandler/successHandler";
import errorHandler from "./utility/errorHandler/errorHandler";
import * as commonService from "utility/utility";
export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = "https://lips-api.bitcotapps.com"
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = "https://lips-api.bitcotapps.com"
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = "https://lips-api.bitcotapps.com"
  }
  return url;
};

export const API_VERSION = "/v1"

const instance = axios.create({
  baseURL: BASE_URL()
});

instance.interceptors.request.use(config => {
  // show loader
  commonService.isLoading.onNext(true);
  return config;
});
instance.interceptors.response.use(config => {
  // hide loader
  commonService.isLoading.onNext(false);
  return config;
});
const token = storage.get("token", null);
instance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error)
);
if (token) instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
export default instance;