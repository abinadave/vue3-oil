<template>
  <!-- <nav>
    
  </nav> -->
  <!-- <NavBar></NavBar> -->
  <ModalLogin></ModalLogin>
  <router-view />
</template>

<script setup>
import NavBar from "@/components/NavBar";
import ModalLogin from "@/components/ModalLogin";
</script>
<style scoped></style>
