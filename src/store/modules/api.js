import axios from "axios";

let url = null;
if (window.location.hostname === "localhost") {
  url = "http://laravel.local";
} else {
  url = "http://laravel.local";
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
