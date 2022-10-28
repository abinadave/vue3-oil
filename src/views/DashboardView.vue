<template>
  <div class="container">
    <div class="container px-4 py-5" id="featured-3">
      <h2 class="pb-2 border-bottom">{{ DashboardTitle }}</h2>
      <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div class="card">
            <div class="card-body">
              <div
                class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-activity"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2Z"
                  />
                </svg>
              </div>

              <h3 class="fs-2" @click="navigateTo('Monitoring')">Monitoring</h3>

              <a href="#" class="icon-link d-inline-flex align-items-center">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#chevron-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="feature col">
          <div class="card">
            <div class="card-body">
              <div
                class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-file-diff"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4zm-2.5 6.5A.5.5 0 0 1 6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                  />
                  <path
                    d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"
                  />
                </svg>
              </div>
              <h3 class="fs-2" @click="navigateTo('Logbook')">Logbook</h3>

              <a href="#" class="icon-link d-inline-flex align-items-center">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#chevron-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="feature col">
          <div class="card">
            <div class="card-body">
              <div
                class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-bar-chart-line"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                  />
                </svg>
              </div>
              <h3 class="fs-2" @click="navigateTo('Financial')">
                Financial and Expense
              </h3>

              <a href="#" class="icon-link d-inline-flex align-items-center">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#chevron-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="feature col second-fs-2">
          <div class="card">
            <div class="card-body">
              <div
                class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-calendar-check"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                  />
                </svg>
              </div>
              <h3 class="fs-2">Availability</h3>

              <a href="#" class="icon-link d-inline-flex align-items-center">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#chevron-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="feature col second-fs-2">
          <div class="card">
            <div class="card-body">
              <div
                class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-calendar2-plus"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                  />
                  <path
                    d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z"
                  />
                </svg>
              </div>
              <h3 class="fs-2">Quantity</h3>

              <a href="#" class="icon-link d-inline-flex align-items-center">
                <svg class="bi" width="1em" height="1em">
                  <use xlink:href="#chevron-right" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

let DashboardTitle = ref("Dashboard");
const navigateTo = (routeName) => {
  router.push({ name: routeName });
};
</script>

<style scoped>
.second-fs-2 {
  margin-top: 80px;
}
.fs-2 {
  text-decoration: none;
  background: linear-gradient(to right, rgb(255, 255, 255), rgb(255, 255, 255)),
    linear-gradient(
      to right,
      rgba(255, 0, 0, 1),
      rgba(255, 0, 180, 1),
      rgba(0, 100, 200, 1)
    );
  background-size: 100% 3px, 0 3px;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  transition: background-size 400ms;
}
.fs-2:hover {
  background-size: 0 3px, 100% 3px;
  cursor: pointer;
}
.card {
  transition: box-shadow 0.3s;
  border-radius: 10px;
  border: 1px solid #ccc;
  background: #fff;
}
.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>
