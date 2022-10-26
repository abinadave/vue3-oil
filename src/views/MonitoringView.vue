<template>
  <div class="container">
    <AuthMonthlyReport></AuthMonthlyReport>
  </div>
</template>

<script setup>
import { ref } from "vue";
import AuthMonthlyReport from "@/components/auth/AuthMonthlyReport.vue";
</script>

<style scoped>
.container {
  padding: 15px;
  margin-top: 20px;
}
</style>
