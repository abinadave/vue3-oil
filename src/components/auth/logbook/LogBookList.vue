<template>
  <table class="table table-hover table-striped text-bg-light p-3">
    <thead class="table-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Date</th>
        <th scope="col">Time</th>
        <th scope="col">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr
        @click="setCurrentLogBook(logbook)"
        v-for="(logbook, index) in store.logbooks"
        :key="index"
      >
        <th scope="row">1</th>
        <td>{{ logbook.fullname }}</td>
        <td>{{ formatDate(logbook.date) }}</td>
        <td>{{ formatTime(logbook.time) }}</td>
        <td>{{ logbook.purpose }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { onMounted } from "vue";
import { useLogbookStore } from "@/store/pinia/logbook";
import moment from "moment";

const store = useLogbookStore();

onMounted(async () => {
  const response = await store.dbFetchAll();
});

const setCurrentLogBook = (logbook) => {
  // store.$patch({
  //   current_logbook: logbook,
  // });
  store.$patch((state) => {
    state.current_logbook = logbook;
    state.updating = true;
  });
};

const formatDate = (date) => {
  return moment(date).format("MMM DD, YYYY");
};

const formatTime = (time) => {
  return moment(time, "HH:mm:ss").format("hh:mm A");
};
</script>

<style scoped>
.table {
  margin-top: 1px;
}
</style>
