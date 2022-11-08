import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import NProgress from "nprogress";
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
  {
    path: "/admin/dashboard",
    name: "DashboardAdmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DashboardView.vue"),
  },
  {
    path: "/admin/financial&Expense",
    name: "Financial",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/FinancialExpense.vue"),
  },
  {
    path: "/admin/Stocks",
    name: "Stocks",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/StocksAvailability.vue"),
  },
  // vue3-oil-master/src/components/auth/stocks/StocksAvailability.vue
  // vue-oil/src/views/ReportOfEvents.vue
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  NProgress.start();
});

router.afterEach((to, from) => {
  // ...
  // explicitly return false to cancel the navigation
  setTimeout(() => {
    NProgress.done();
  }, 1000);
});

export default router;
