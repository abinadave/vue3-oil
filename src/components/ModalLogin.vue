<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form @submit.prevent="onSubmit">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Account Credentials
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                  v-model="form.email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  v-model="form.password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  @keypress.enter.prevent="onSubmit"
                  required
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Remember me</label
                >
              </div>
              <div
                v-show="invalidUserOrPass"
                class="alert alert-danger"
                role="alert"
              >
                A simple danger alert—check it out!
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              id="btnCloseModal"
            >
              Close
            </button>
            <button v-if="!loading" type="submit" class="btn btn-primary">
              Submit
            </button>
            <button v-else class="btn btn-primary" type="button" disabled>
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Loading...
            </button>
          </div>
        </div>
      </form>
      <!-- <pre>
        {{ form }}
      </pre> -->
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
// import { Modal } from "bootstrap";
import axios from "axios";

let form = reactive({
  email: "",
  password: "",
});

let invalidUserOrPass = ref(false);
let loading = ref(false);

const onSubmit = (event) => {
  console.log(event);
  //hardcoded login
  loading.value = true;
  axios
    .post("http://laravel.local/api/login", {
      email: form.email,
      password: form.password,
    })
    .then(function (response) {
      if (response.status === 201) {
        onSuccess(response.data);
      }
      setTimeout(() => {
        loading.value = false;
      }, 6000);
    })
    .catch(function (error) {
      invalidUserOrPass.value = true;
      loading.value = false;
      console.log(error);
    });
};

function onSuccess({ user, access_token }) {
  console.log("Very good");
  console.log(user, access_token);
  //set localStorage
  localStorage.setItem("auth_user_id", user.id);
  localStorage.setItem("access_token", access_token);

  setTimeout(() => {
    // alert("Modal should hide");
    document.getElementById("btnCloseModal").click();
    // const myModal = new Modal(document.getElementById("staticBackdrop"));
    // myModal.hide();
    window.location = ".";
  }, 1000);
}
</script>

<style></style>
