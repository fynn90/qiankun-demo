import React from "react";
import ReactDOM, { render } from "react-dom";
import {loadMicroApp,initGlobalState,MicroAppStateActions} from "qiankun"
import App from './App'

render(<App></App>, document.getElementById('mainApp'))

const actions: MicroAppStateActions = initGlobalState({
  'vue-app': [],
  'react-app': [],
  'ng-app':[]
})

loadMicroApp({ name: 'vue-app', entry: '//localhost:8080', container: '#vueApp' });
loadMicroApp({ name: 'react-app', entry: '//localhost:8888', container: '#reactApp' });
loadMicroApp({ name: 'ng-app', entry: '//localhost:4200', container: '#ngApp' });

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  // console.log(state, prev);
});