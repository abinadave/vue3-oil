import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/test",
    name: "test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestAuth.vue"),
  },
  {
    path: "/logbook",
    name: "Logbook",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/logbookView.vue"),
  },
  {
    path: "/reports",
    name: "Reports",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ReportOfEvents.vue"),
  },
  {
    path: "/monitoring",
    name: "Monitoring",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MonitoringView.vue"),
  },
  // vue-oil/src/views/ReportOfEvents.vue
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
