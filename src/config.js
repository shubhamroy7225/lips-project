import axios from 'axios';

export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = "https://stage-api.lips.social";
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = "https://lips-social-alb-staging-1800407788.us-west-2.elb.amazonaws.com";
  }
  if (process.env.REACT_APP_ENV === 'production') {
    console.log("production if");
    url = "https://lips-social-alb-staging-1800407788.us-west-2.elb.amazonaws.com";
  }
  return url;
};

export const API_VERSION = "/v1"

const instance = axios.create({
  baseURL: BASE_URL()
});

export default instance;