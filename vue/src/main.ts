/*
 * @Author: Fan
 * @Date: 2021-03-22 20:21:59
 * @description:
 */
import './public-path';
import { createApp } from 'vue';
import { store } from './store';
import App from './App.vue';

let instance: any = null;
function render(props: any) {
  const { container } = props;
  instance = createApp(App);
  instance.use(store);

  instance.mount(container ? container.querySelector('#vueApp') : '#vueApp');
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped');
}

export async function mount(props: any) {
  render(props);
  // instance.config.globalProperties.$onGlobalStateChange =
  //   props.onGlobalStateChange;
  // instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = '';
  instance = null;
}
