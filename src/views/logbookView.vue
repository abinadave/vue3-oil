<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-3"><LogBookForm></LogBookForm></div>
          <div class="col-9"><LogBookList></LogBookList></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LogBookForm from "@/components/auth/logbook/LogBookForm.vue";
import LogBookList from "@/components/auth/logbook/LogBookList.vue";
</script>
<style scoped>
.container {
  margin-top: 50px;
}
</style>
