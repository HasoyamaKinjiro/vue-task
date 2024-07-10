import { createApp } from 'vue';

import App from '@/App';
/*import EducationComponent from '@/components/EducationComponent';*/
import globalComponents from '@/components/global';

import router from '@/router';
import '@/assets/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/bootstrap-icons.svg';

createApp(App)
    .use(router)
    /*.component('EducationComponent', EducationComponent)*/
    // This is way to declare component on global lvl,
    // but if there will be a lot of components, it won't be so convenient
    // So we need use "use"
    .use(globalComponents)
    .mount('#app');
