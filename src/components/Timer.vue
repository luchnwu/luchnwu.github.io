<template>
  <date-picker
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
      <button class="mx-btn mx-btn-text" @click="setToday(emit)">Today</button>
    </template>
    <template #footer>
      <button class="mx-btn mx-btn-text" @click="toggleTimePanel">
        {{ showTimePanel ? 'select date' : 'select time' }}
      </button>
    </template>
  </date-picker>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import DatePicker from 'vue-datepicker-next';
import 'vue-datepicker-next/index.css';
import moment from 'moment';

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const setToday = (emit) => {
  const currentTime = new Date(moment().format());
  emit(currentTime);
};

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
