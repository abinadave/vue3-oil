import { createApp } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import App from "./App.vue";
import AppAuth from "./AppAuth.vue";
import router from "./router";
import auth_router from "@/router/auth_router.js";
import store from "./store";
// import "@/scss/main.scss";

// createApp(App).use(store).use(router).mount("#app");

import apiClient from "@/store/modules/api";

const url = "/api/user";

apiClient({
  method: "GET",
  url,
})
  .then((response) => {
    // console.log(response);
    if (response.status === 200) {
      createApp(AppAuth).use(store).use(auth_router).mount("#app");
      auth_router.push({ name: "DashboardAdmin" });
      console.log("Successfully logged in");
    }
  })
  .catch((err) => {
    console.log(err.response);
    if (err.response.status === 401) {
      createApp(App).use(store).use(router).mount("#app");
      //   router.push({ name: "Login" });
      console.log("Unauthorized");
    }
  });
