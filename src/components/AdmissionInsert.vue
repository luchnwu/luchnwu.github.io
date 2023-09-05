<template>
  <div class="fw-bold text-center fs-5">新增入院護理評估-成人</div>
  <div class="mt-2">
    <button
      class="btn btn-secondary"
      type="button"
      @click="handleClick('adult')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-right']" rotation="180" />
      返回清單
    </button>
  </div>
  <div class="mt-2">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#home"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="true"
        >
          基本資料
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#profile"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          個人病史
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          日常生活
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <basic-information />
      </div>
      <div
        class="tab-pane fade"
        id="profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        2
      </div>
      <div
        class="tab-pane fade"
        id="contact"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        3
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BasicInformation from './../components/BasicInformation.vue';

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
  if (type === 'back') {
    turnPage.value = 'index';
  }
  if (type === 'add') {
    turnPage.value = 'add';
  }
};
</script>

<style scoped>
.nav-link {
  background: #deedf7;
  border: 1px solid #aed0ea;
  color: black;
}
.nav-item .active {
  background: #62bcea;
  color: white;
}
</style>
