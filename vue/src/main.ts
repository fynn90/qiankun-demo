/*
 * @Author: Fan
 * @Date: 2021-03-22 20:21:59
 * @description:
 */
import { createApp } from 'vue';
import { store } from './store';
import App from './App.vue';

createApp(App).use(store).mount('#vueApp');
