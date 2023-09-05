<template>
  <div
    class="form-check form-check-inline"
    v-for="{ id, value, label } in radioOptions"
    :key="id"
  >
    <vee-field
      class="form-check-input"
      type="radio"
      :name="name"
      :id="id"
      :value="value"
      :rules="validate"
    />
    <label class="form-check-label" :for="id">{{ label }}</label>
  </div>
  <error-message
    :name="name"
    class="alert alert-warning text-danger mx-2 p-1"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Field as VeeField, ErrorMessage } from 'vee-validate';

const props = defineProps({
  name: String,
  radioOptions: { id: String, label: String, value: String },
});

const validate = (value) => {
  console.log(props.name, value);
  if (value == 'undefined' || value == null || value == '')
    return '請至少選擇一項';
  return true;
};
</script>

<style scoped></style>
