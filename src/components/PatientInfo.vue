<template>
  <div class="row gx-1">
    <div class="col-md-5">
      <div class="row gx-1">
        <div class="col-sm-6 col-md-7">
          <div :class="divClass">病人姓名：{{ currentPatient.ptName }}</div>
          <div :class="divClass">主治醫師：{{ currentPatient.doctor }}</div>
        </div>
        <div class="col-sm-6 col-md-5">
          <div :class="divClass">病床號：{{ currentPatient.bedNo }}</div>
          <div :class="divClass">病歷號：{{ currentPatient.ptNo }}</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="row gx-1">
        <div class="col-sm-6 col-md-8">
          <div :class="divClass">生日：{{ currentPatient.ptBirthday }}</div>
          <div :class="divClass">
            住院日期：{{ currentPatient.admissionDate }}
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div :class="divClass">年齡：{{ currentPatient.ptAge }}</div>
          <div :class="divClass">性別：{{ currentPatient.ptGender }}</div>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="row gx-1">
        <div class="col-md-12">
          <div :class="divClass" class="alert-danger">
            特殊註記：{{ currentPatient.commond }}
          </div>
          <div :class="divClass" class="alert-danger">
            診斷：{{ currentPatient.ptICD }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const divClass = 'alert alert-primary fw-bold text-truncate p-2 my-1';

const patientData = {
  ptName: '王大明',
  bedNo: '8A 05',
  ptBirthday: '1989-05-28',
  ptAge: '50',
  commond: '拒 DNR',
  doctor: '黃大仙',
  ptNo: '1314520',
  admissionDate: '2023-09-01',
  ptGender: 'M',
  ptICD: '慢性心臟病',
};

const currentPatient = ref({
  ptName: '',
  bedNo: '',
  ptBirthday: '',
  ptAge: '',
  commond: '',
  doctor: '',
  ptNo: '',
  admissionDate: '',
  ptGender: '',
  ptICD: '',
});

const initPatientInfo = (data) => {
  let { value } = currentPatient;
  value.ptName =
    data.ptName.substring(0, 1) + 'Ｏ' + patientData.ptName.substring(2);
  value.bedNo = data.bedNo;
  value.ptBirthday = data.ptBirthday;
  value.ptAge = data.ptAge;
  value.commond = data.commond;
  value.doctor =
    data.doctor.substring(0, 1) + 'Ｏ' + patientData.ptName.substring(2);
  value.ptNo = data.ptNo;
  value.admissionDate = data.admissionDate;
  value.ptGender = data.ptGender === 'M' ? '男' : '女';
  value.ptICD = data.ptICD;
};

initPatientInfo(patientData);
</script>

<style scoped></style>
