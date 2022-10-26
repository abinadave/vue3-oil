// in HTTP.js
import axios from "axios";
import NProgress from "nprogress";

let url = null;
if (window.location.hostname === "localhost") {
  url = "http://oil-api.laravel";
} else {
  url = "http://oil-api.laravel";
}

axios.defaults.baseURL = url;

// console.log(`baseURL: ${axios.defaults.baseURL}`);
// create a new axios instance
const instance = axios.create({
  baseURL: url,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    Accept: "application/json",
  },
});

// alert();
// before a request is made start the nprogress
// if()
instance.interceptors.request.use((config) => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
instance.interceptors.response.use((response) => {
  NProgress.done();
  return response;
});

export default instance;
