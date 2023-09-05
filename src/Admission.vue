<template>
  <div class="container-fluid">
    <div class="my-2">
      <PatientInfo />
    </div>
    <div v-if="page === 'index'">
      <admission-index v-model:page="page" />
    </div>
    <div v-if="page === 'list'">
      <admission-list v-model:page="page" />
    </div>
    <div v-if="page === 'add'">
      <admission-insert v-model:page="page" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientInfo from './components/PatientInfo.vue';
import AdmissionIndex from './components/AdmissionIndex.vue';
import AdmissionList from './components/AdmissionList.vue';
import AdmissionInsert from './components/AdmissionInsert.vue';

const page = ref('index');
</script>

<style scoped></style>
