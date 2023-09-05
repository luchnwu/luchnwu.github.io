<template>
  <div class="row g-3 align-items-center py-3">
    <div class="col-auto text-center">
      <span v-if="must" class="must">＊</span>
      <label :for="labelfor" class="col-form-label">{{ labelName }}</label>
    </div>
    <div class="col-auto mx-3 mx-sm-0">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  must: String,
  labelName: String,
  labelfor: String,
});
</script>

<style scoped>
.col-form-label {
  font-weight: bolder;
  background-color: #d9d9d9;
  width: 200px;
}
.row {
  border-bottom: 1px dashed #b9b9b9;
}
.must {
  color: red;
}
</style>
