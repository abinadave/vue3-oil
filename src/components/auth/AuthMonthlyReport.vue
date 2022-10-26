<template>
  <div>
    <div class="card">
      <div class="card-header">
        {{ Header }}
      </div>
      <div class="card-body">
        <!-- <h5>{{ SubHeader }}</h5> -->
        <!-- initialSetYear: {{ initialSetYear }} -->
        <div>
          <!-- years: {{ years }} -->
          <!-- selectedYear: {{ selectedYear }} -->
          <p class="text-center">
            Total sales for <b>{{ selectedYear }}</b> is
            <b>{{ totalSales }}</b>
          </p>
          <select
            style="margin-top: -37px"
            v-model="selectedYear"
            class="select-year form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Select Year</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
        </div>
        <!-- <br /> -->
        <hr />
        <!-- <br /> -->
        <!-- <p>isFetching: {{ isFetching }}</p> -->
        <div
          v-if="is_fetching_monthly_sales"
          class="spinner-grow m-5"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <div v-else>
          <canvas id="myChart" width="400" height="180"></canvas>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import _sum from "lodash/sum";
import _floor from "lodash/floor";

import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();
let is_fetching_monthly_sales = computed(
  () => store.state.sales.is_fetching_monthly_sales
);
let years = computed(() => store.state.sales.years);
// const Header = ref("Monitoring Reports");
const Header = ref("Monthly Sales for Both Oil and Gas");

//models
let selectedYear = ref("");
let initialSetYear = ref("");

async function setYearToLatest({ data }) {
  let firstYear = years.value[0];
  selectedYear.value = firstYear;
  initialSetYear.value = firstYear;
  let response = await store.dispatch("sales/dbGetSalesPerYear", firstYear);
  console.log(response);
}

let yearly_sales = computed(() => store.state.sales.yearly_sales);
let totalSales = computed(() => {
  return _floor(_sum(yearly_sales.value), 2);
});

watch(selectedYear, async (newYear, oldYear) => {
  // alert(`New year selected ${newYear}`);
  if (initialSetYear.value != newYear) {
    initialSetYear.value = newYear;
    let response = await store.dispatch("sales/dbGetSalesPerYear", newYear);
    setDashboard();
  }
});

function setDashboard() {
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales: ",
          // "Year: " +
          // selectedYear.value +
          // ", Total sales: " +
          // _floor(_sum(yearly_sales.value), 2) +
          // ", Monthly sales: ",
          data: yearly_sales.value,
          backgroundColor: ["rgba(255, 99, 132, 0.2)"],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

onMounted(async () => {
  const respYears = await store.dispatch("sales/dbGetYears");
  await setYearToLatest(respYears);
  // const response = await store.dispatch("sales/dbFetchAllSales");
  setDashboard();
});
</script>

<style scoped>
.select-year {
  width: 20%;
}
</style>
