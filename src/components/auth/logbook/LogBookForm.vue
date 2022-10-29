<template>
  <h2 class="title">{{ Header }}</h2>
  <!-- store logbook counter: {{ storeLogbook.count }} -->
  <form @submit.prevent="onSubmit">
    <div class="mb-3">
      <label class="form-label">Name</label>
      <input
        id="fullname"
        v-model="form.fullname"
        type="text"
        class="form-control"
        placeholder="Full name"
        autofocus
        required
      />
    </div>
    <div class="mb-3">
      <label class="form-label">Date</label>
      <input v-model="form.date" type="date" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Time</label>
      <!-- <input type="date" class="form-control" /> -->
      <div style="margin: 20px">
        <div class="row">
          <div class="col-6 col-sm-3">
            <i
              class="bi bi-chevron-compact-up bi-timepicker"
              @click="increaseHour()"
              @mouseup="mouseUpHourIncrease()"
              @mousedown="mouseDownHourIncrease()"
            ></i>
          </div>
          <div class="col-6 col-sm-3">
            <i
              class="bi bi-chevron-compact-up bi-timepicker"
              @click="increaseMinute()"
              @mouseup="mouseUpMinuteIncrease()"
              @mousedown="mouseDownMinuteIncrease()"
            ></i>
          </div>

          <!-- Force next columns to break to new line -->
          <div class="w-100"></div>

          <div class="col-6 col-sm-3">
            <span v-if="Hours < 10"> 0{{ Hours }} </span>
            <span v-else>{{ Hours }}</span>
          </div>
          <div class="col-6 col-sm-3">
            <span v-if="Minutes < 10"> 0{{ Minutes }} </span>
            <span v-else>{{ Minutes }}</span>
          </div>

          <div class="w-100"></div>

          <div class="col-6 col-sm-3">
            <i
              class="bi bi-chevron-compact-down bi-timepicker"
              @click="decreaseHour()"
              @mouseup="mouseUpHourDecrease()"
              @mousedown="mouseDownHourDecrease()"
            ></i>
          </div>
          <div class="col-6 col-sm-3">
            <i
              class="bi bi-chevron-compact-down bi-timepicker"
              @click="decreaseMinute()"
              @mouseup="mouseUpMinuteDecrease()"
              @mousedown="mouseDownMinuteDecrease()"
            ></i>
          </div>

          <div class="col-6 col-sm-3" style="margin-top: -1.5em">
            <button
              @click="selectAmorPm('AM')"
              type="button"
              class="btn"
              :class="{ 'btn-outline-secondary': textTime == 'AM' }"
            >
              AM
            </button>
          </div>
          <div class="col-6 col-sm-3" style="margin-top: -1.5em">
            <button
              @click="selectAmorPm('PM')"
              type="button"
              class="btn"
              style="margin-left: -20px"
              :class="{ 'btn-outline-secondary': textTime == 'PM' }"
            >
              PM
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label class="form-label">Purpose</label>
      <textarea v-model="form.purpose" class="form-control" required />
    </div>
    <hr />
    <div class="d-grid gap-2">
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
    <!-- 
    <pre>
        {{ form }}
    </pre> -->
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useLogbookStore } from "@/store/pinia/logbook";
import moment from "moment";
const storeLogbook = useLogbookStore();

const Header = "Logbook Form";
const Hours = ref(0);
const Minutes = ref(0);
let interval = null;
let textTime = ref("AM");

const form = reactive({
  fullname: "",
  date: "",
  time: "",
  purpose: "",
});

const onSubmit = async () => {
  form.time = getTime();
  const response = await storeLogbook.dbSaveLogBook(form);
  if (response.status === 422) {
    alert("Duplicate name or incomplete fields.");
  } else if (response.status === 201) {
    clearForm();
  }
};

const clearForm = () => {
  form.fullname = "";
  form.date = "";
  form.time = "";
  form.purpose = "";
  Hours.value = 0;
  Minutes.value = 0;
  document.getElementById("fullname").focus();
};

const getTime = () => {
  let hr = Hours.value < 10 ? `0${Hours.value}` : Hours.value;
  let min = Minutes.value < 10 ? `0${Minutes.value}` : Minutes.value;
  let amorpm = textTime.value == "PM" ? "HH" : "hh";
  let formatted = `${hr}:${min} ${textTime.value}`;
  return moment(formatted, ["h:mm A"]).format("HH:mm:ss");
};

const selectAmorPm = (value) => {
  textTime.value = value;
};

const mouseUpHourIncrease = () => {
  clearInterval(interval);
};

const mouseDownHourIncrease = () => {
  createTimerToIncreaseHour();
};

let createTimerToIncreaseHour = () => {
  interval = setInterval(function () {
    increaseHour();
  }, 300);
};

let createTimerToDecreaseHour = () => {
  interval = setInterval(function () {
    decreaseHour();
  }, 300);
};

const increaseHour = () => {
  if (Hours.value < 12) {
    Hours.value++;
  }
};

const mouseUpHourDecrease = () => {
  clearInterval(interval);
};

const mouseDownHourDecrease = () => {
  createTimerToDecreaseHour();
};

const decreaseHour = () => {
  if (Hours.value) {
    Hours.value--;
  }
};

const increaseMinute = () => {
  if (Minutes.value < 60) {
    Minutes.value++;
  }
};

const mouseUpMinuteIncrease = () => {
  clearInterval(interval);
};

const mouseDownMinuteIncrease = () => {
  createTimerToIncreaseMinute();
};

let createTimerToIncreaseMinute = () => {
  interval = setInterval(function () {
    increaseMinute();
  }, 100);
};

const decreaseMinute = () => {
  if (Minutes.value) {
    Minutes.value--;
  }
};

const mouseUpMinuteDecrease = () => {
  clearInterval(interval);
};

const mouseDownMinuteDecrease = () => {
  createTimerToDecreaseMinute();
};

let createTimerToDecreaseMinute = () => {
  interval = setInterval(function () {
    decreaseMinute();
  }, 100);
};
</script>

<style scoped>
.bi-timepicker {
  cursor: pointer;
}
.bi-timepicker:hover {
  color: blue;
}
</style>
