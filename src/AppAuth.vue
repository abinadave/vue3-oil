<template>
  <NavBarAuth></NavBarAuth>
  <AuthNotifSystemUpdate></AuthNotifSystemUpdate>
  <router-view />
</template>

<script setup>
import NavBarAuth from "@/components/NavBarAuth.vue";
import AuthNotifSystemUpdate from "@/components/auth/Notifs/AuthNotifSystemUpdate.vue";
</script>
<style scoped></style>
