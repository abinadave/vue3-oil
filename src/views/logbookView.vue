<template>
  <div>
    <div class="page-wrapper bg-red p-t-180 p-b-100 font-robo">
      <div class="wrapper wrapper--w960">
        <div class="card card-2">
          <div class="card-heading"></div>
          <div class="card-body">
            <h2 class="title">Logbook Form</h2>
            <form method="POST">
              <div class="input-group">
                <input
                  class="input--style-2"
                  type="text"
                  placeholder="Logbook Name"
                  name="logbookname"
                />
              </div>
              <div class="row row-space">
                <div class="col-2">
                  <div class="input-group">
                    <input
                      class="input--style-2"
                      type="date"
                      placeholder="Date"
                      name="date"
                    />
                    <i
                      class="zmdi zmdi-calendar-note input-icon js-btn-calendar"
                    ></i>
                  </div>
                </div>
                <!-- <div class="col-2">
                  <div class="input-group">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select name="gender">
                        <option disabled="disabled" selected="selected">
                          Gender
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                      <div class="select-dropdown"></div>
                    </div>
                  </div>
                </div> -->
              </div>
              <div class="p-t-30">
                <button class="btn btn--radius btn--green" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
@import "@/assets/vendor-logbook/select2/select2.min.css";
@import "@/assets/vendor-logbook/main.css";
</style>
