import React from "react";
import ReactDOM, { render } from "react-dom";
import {loadMicroApp} from "qiankun"
import App from './App'

render(<App></App>, document.getElementById('mainApp'))

loadMicroApp({ name: 'vue-app', entry: '//localhost:8080', container: '#vueApp' });
loadMicroApp({ name: 'react-app', entry: '//localhost:8888', container: '#reactApp' });
