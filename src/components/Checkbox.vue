<template>
  <div class="form-check form-check-inline">
    <vee-field
      class="form-check-input"
      type="checkbox"
      name="inlineCheckboxOptions"
      id="inlineCheckbox1"
      value="option1"
    />
    <label class="form-check-label" for="inlineCheckbox1">1</label>
  </div>
  <div class="form-check form-check-inline">
    <vee-field
      class="form-check-input"
      type="checkbox"
      name="inlineCheckboxOptions"
      id="inlineCheckbox2"
      value="option2"
    />
    <label class="form-check-label" for="inlineCheckbox2">2</label>
  </div>
  <div class="form-check form-check-inline">
    <vee-field
      class="form-check-input"
      type="checkbox"
      name="inlineCheckboxOptions"
      id="inlineCheckbox3"
      value="option3"
    />
    <label class="form-check-label" for="inlineCheckbox3">3</label>
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
  checkboxOptions: { id: String, label: String, value: String },
});

const validate = (value) => {
  console.log(props.name, value);
  if (value == 'undefined' || value == null || value == '')
    return '請至少選擇一項';
  return true;
};
</script>

<style scoped></style>
