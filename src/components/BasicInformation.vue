<template>
  <Form action="" @submit="onSubmit" :initial-values="formValues">
    <question must="true" labelName="入院日期時間" labelfor="admissionTime">
      <vee-field
        name="admissionTime"
        v-slot="{ field }"
        :rules="validateAdmissionTime"
      >
        <timer class="mb-2" v-bind="field" />
      </vee-field>
      <error-message
        name="admissionTime"
        class="alert alert-warning text-danger mx-2 p-1"
      />
    </question>
    <question must="true" labelName="入院方式" labelfor="admission_rule">
      <div>
        <radio name="admission_rule" :radioOptions="ruleRadioOptions" />
      </div>
    </question>
    <question must="true" labelName="入院經過" labelfor="admission_part">
      <div>
        <vee-field
          name="admission_part"
          v-slot="{ field }"
          :rules="validateAdmissionTime"
        >
          <textarea
            v-bind="field"
            class=""
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </vee-field>
        <error-message
          name="admission_part"
          class="alert alert-warning text-danger mx-2 p-1"
        />
      </div>
    </question>
    <question must="true" labelName="教育" labelfor="education">
      <div>
        <radio
          name="admission_education"
          :radioOptions="educationRadioOptions"
        />
      </div>
    </question>
    <question must="true" labelName="語言" labelfor="language">
      <div>
        <Checkbox />
      </div>
    </question>
    <button class="btn btn-primary m-2 d-grid mx-auto">onSubmit</button>

    <!-- <input
        type="password"
        id="inputPassword6"
        class="form-control"
        aria-describedby="passwordHelpInline"
      /> -->
  </Form>
  {{ sumitValues }}
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Form, Field as VeeField, ErrorMessage } from 'vee-validate';
import Question from './../components/Question.vue';
import Timer from './../components/Timer.vue';
import Radio from './../components/Radio.vue';
import Checkbox from './../components/Checkbox.vue';

const ruleRadioOptions = [
  { id: 'inlineRadio1', label: '步行', value: 'option1' },
  { id: 'inlineRadio2', label: '拐杖', value: 'option2' },
  { id: 'inlineRadio3', label: '旁人協助', value: 'option3' },
  { id: 'inlineRadio4', label: '輪椅', value: 'option4' },
];

const educationRadioOptions = [
  { id: 'inlineRadio1', label: '國小', value: 'option1' },
  { id: 'inlineRadio2', label: '國中', value: 'option2' },
  { id: 'inlineRadio3', label: '高中', value: 'option3' },
  { id: 'inlineRadio4', label: '大學', value: 'option4' },
];

const sumitValues = ref();

const onSubmit = (values) => {
  console.log(values);
  sumitValues.value = values;
};

// Initial values
const formValues = {
  inlineCheckboxOptions: ['option1', 'option2'],
};

const validateAdmissionTime = (value) => {
  console.log(value);
  if (value == 'undefined' || value == null || value == '') return '尚未輸入';
  return true;
};
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
