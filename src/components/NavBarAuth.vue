<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="logo" src="@/assets/img/icon.png" />A.O.A.G.M.S</a
        >
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" @click="redirectTo('DashboardAdmin')">Home </a>
            <a class="nav-link" @click="redirectTo('Logbook')">Logs</a>
            <a class="nav-link" @click="redirectTo('Monitoring')">Monitoring</a>
            <a class="nav-link">Sales list</a>
            <!-- <a class="nav-link" @click="redirectTo('Reports')">Reports</a> -->
            <!-- <a class="nav-link disabled">Settings</a> -->
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" @click="onLogout">Logout </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

async function onLogout() {
  let response = await store.dispatch("user/dbForceLogout");
  if (response.status === 201) {
    window.location = ".";
  }
}
function redirectTo(routeName) {
  router.push({ name: routeName });
}
</script>

<style scoped>
.logo {
  width: 30px;
  margin-right: 15px;
}
.btn-custom-login {
  --bs-btn-padding-y: 0.25rem;
  --bs-btn-padding-x: 0.5rem;
  --bs-btn-font-size: 0.75rem;
}
.nav-link {
  cursor: pointer;
}
.nav-link:hover {
  color: orange;
  cursor: pointer;
}
</style>
