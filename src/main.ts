import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'normalize.css';

const vueApp = createApp(App);
vueApp
  .use(store)
  .use(router)
  .use(Antd as any)
  .mount('#app');
