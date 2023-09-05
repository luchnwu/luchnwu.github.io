<template>
  <div class="fw-bold text-center fs-5">入院護理評估列表-成人</div>
  <div class="gy-2 my-1">
    <button
      class="btn btn-secondary mt-1 me-1"
      type="button"
      @click="handleClick('back')"
    >
      <font-awesome-icon :icon="['fas', 'arrow-right']" rotation="180" />
      入院護理評估總覽
    </button>
    <button
      class="btn btn-primary mt-1"
      type="button"
      @click="handleClick('add')"
    >
      <font-awesome-icon :icon="['fas', 'circle-plus']" />
      新增評估
    </button>
  </div>
  <div>
    <table class="table table-striped table-bordered text-center">
      <thead class="table-header">
        <tr>
          <th class="col-1" scope="col"></th>
          <th scope="col">文件說明</th>
          <th scope="col">最新修改日期時間</th>
          <th scope="col">版本</th>
          <th scope="col">狀態</th>
          <th scope="col">最新編輯者</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            <div
              class="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class="btn btn-warning">
                <font-awesome-icon :icon="['fas', 'print']" />
              </button>
              <button type="button" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'file-pen']" />
              </button>
              <button type="button" class="btn btn-danger">
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </button>
            </div>
          </th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">
            <div
              class="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class="btn btn-warning">
                <font-awesome-icon :icon="['fas', 'print']" />
              </button>
              <button type="button" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'file-pen']" />
              </button>
              <button type="button" class="btn btn-danger">
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </button>
            </div>
          </th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>@fat</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">
            <div
              class="btn-group btn-group-sm"
              role="group"
              aria-label="Basic example"
            >
              <button type="button" class="btn btn-warning">
                <font-awesome-icon :icon="['fas', 'print']" />
              </button>
              <button type="button" class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'file-pen']" />
              </button>
              <button type="button" class="btn btn-danger">
                <font-awesome-icon :icon="['fas', 'trash-can']" />
              </button>
            </div>
          </th>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
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
  if (type === 'back') {
    turnPage.value = 'index';
  }
  if (type === 'add') {
    turnPage.value = 'add';
  }
};
</script>

<style scoped>
.table-header th {
  background-color: #add8e6;
}
</style>
