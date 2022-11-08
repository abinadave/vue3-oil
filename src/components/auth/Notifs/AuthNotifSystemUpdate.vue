<template>
  <button
    style="display: none"
    type="button"
    class="btn btn-primary"
    id="liveToastBtn"
  >
    Show live toast
  </button>

  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div
      id="liveToast"
      class="toast"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-header">
        <!-- <img src="..." class="rounded me-2" alt="..." /> -->
        <strong class="me-auto">{{ NotifHeader }}</strong>
        <small>A few seconds ago.</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">{{ NotifBody }}</div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { Toast } from "bootstrap";

const NotifHeader = ref("System Notification");
const NotifBody = ref("System is already updated");

onMounted(() => {
  const toastTrigger = document.getElementById("liveToastBtn");
  const toastLiveExample = document.getElementById("liveToast");
  if (toastTrigger) {
    toastTrigger.addEventListener("click", () => {
      const toast = new Toast(toastLiveExample);
      toast.show();
    });
  }

  setTimeout(() => {
    document.getElementById("liveToastBtn").click();
  }, 2500);
});
</script>

<style></style>
