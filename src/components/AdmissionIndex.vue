<template>
  <div class="fw-bold text-center fs-5">入院護理評估</div>
  <div class="text-center">
    <button
      class="btn btn-info m-3 p-5 fs-2"
      type="button"
      @click="handleClick('adult')"
    >
      <font-awesome-icon :icon="['fas', 'person']" size="2xl" /> <br />
      成人 <br />
      入院護理評估
    </button>
    <button class="btn btn-info m-3 p-5 fs-2" type="button">
      <font-awesome-icon :icon="['fas', 'person-dress']" size="2xl" /> <br />
      產科<br />
      入院護理評估
    </button>
    <button class="btn btn-info m-3 p-5 fs-2" type="button">
      <font-awesome-icon :icon="['fas', 'child']" size="2xl" /> <br />
      兒科<br />
      入院護理評估
    </button>
    <button class="btn btn-info m-3 p-5 fs-2" type="button">
      <font-awesome-icon :icon="['fas', 'brain']" size="2xl" /> <br />
      精神科<br />
      入院護理評估
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const props = defineProps({
  page: String,
});

const emit = defineEmits(['update:page']);

const turnPage = computed({
  get() {
    return props.page;
  },
  set(value) {
    emit('update:page', value);
  },
});

const handleClick = (type) => {
  if (type === 'adult') {
    turnPage.value = 'list';
  }
};
</script>

<style scoped>
.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
</style>
