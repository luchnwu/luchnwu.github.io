<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';

import { ref } from 'vue';

const time0 = ref(null);
const showTimePanel = ref(false);
const open = ref(false);

const toggleTimePanel = () => {
  showTimePanel.value = !showTimePanel.value;
};
const handleOpenChange = () => {
  showTimePanel.value = false;
};
const handleChange = (value, type) => {
  console.log(type.value);
  if (type === 'minute') {
    open.value = false;
    showTimePanel.value = false;
  }
};
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  {{ time0 }}<br />
  <DatePicker
    v-model:value="time0"
    v-model:open="open"
    type="datetime"
    valueType="format"
    format="YYYY-MM-DD HH:mm"
    :show-time-panel="showTimePanel"
    @close="handleOpenChange"
    @change="handleChange"
  >
    <template #header="{ emit }">
      <button class="mx-btn mx-btn-text" @click="emit(new Date())">
        Today
      </button>
    </template>
    <template #footer>
      <button class="mx-btn mx-btn-text" @click="toggleTimePanel">
        {{ showTimePanel ? 'select date' : 'select time' }}
      </button>
    </template>
  </DatePicker>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
