<template>
  <DatePicker
    v-model:value="value"
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

<script setup lang="ts">
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import { ref, computed } from 'vue';

const props = defineProps({
  value: String,
});

const emit = defineEmits(['update:value']);

const value = computed({
  get() {
    return props.value;
  },
  set(value) {
    emit('update:value', value);
  },
});

const showTimePanel = ref(false);
const open = ref(false);

const toggleTimePanel = () => {
  showTimePanel.value = !showTimePanel.value;
};
const handleOpenChange = () => {
  showTimePanel.value = false;
};
const handleChange = (value, type) => {
  console.log(value);
  if (type === 'minute') {
    open.value = false;
    showTimePanel.value = false;
  }
};
</script>
