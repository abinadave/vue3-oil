import axios from "axios";

let url = null;
if (window.location.hostname === "localhost") {
  url = "http://oil-api.laravel";
} else {
  url = "http://oil-api.laravel";
}

axios.defaults.baseURL = url;

// create a new axios instance
const instance = axios.create({
  baseURL: url,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("access_token"),
    Accept: "application/json",
  },
});

export default instance;
