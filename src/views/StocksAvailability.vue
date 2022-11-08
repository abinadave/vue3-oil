<template>
  <div class="container">
    <br />
    <h2>Product List</h2>
    <p>As of {{ dateNow }}</p>
    <hr />
    <table class="table">
      <thead>
        <tr>
          <th width="300" scope="col"># Product Code</th>
          <th scope="col">Product name</th>
          <th scope="col">Available Stock per liter</th>
          <!-- <th scope="col">Handle</th> -->
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1101</th>
          <td>Diesel</td>
          <td>175</td>
        </tr>
        <tr>
          <th scope="row">1102</th>
          <td>Premium</td>
          <td>190</td>
        </tr>
        <tr>
          <th scope="row">1103</th>
          <td>Unleaded</td>
          <td>125</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import moment from "moment";
let dateNow = moment().format("MMM DD, YYYY HH:mm A");
</script>

<style></style>
