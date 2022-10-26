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
            <a class="nav-link active" aria-current="page"
              ><router-link to="/home">Home</router-link></a
            >
            <a class="nav-link"
              ><router-link to="/register">Register</router-link></a
            >
            <a class="nav-link"
              ><router-link to="/forgotPassword"
                >Forgot Password</router-link
              ></a
            >
          </div>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#"
                ><button
                  type="button"
                  class="btn btn-primary btn-custom-login"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Login
                </button></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

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
</style>
