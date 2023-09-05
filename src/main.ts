import { createApp } from 'vue';
//import App from './App.vue'
import App from './Admission.vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import specific icons */
import {
  faPerson,
  faPersonDress,
  faChild,
  faBrain,
  faArrowRight,
  faCirclePlus,
  faPrint,
  faFilePen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(
  faPerson,
  faPersonDress,
  faChild,
  faBrain,
  faArrowRight,
  faCirclePlus,
  faPrint,
  faFilePen,
  faTrashCan
);

createApp(App).mount('#app');
