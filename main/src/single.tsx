/*
 * @Author: Fan
 * @Date: 2021-03-17 18:09:05
 * @description: 
 */
import React from "react";
import ReactDOM, { render } from "react-dom";
import {start, registerMicroApps, setDefaultMountApp} from "qiankun"
import App from './App'

render(<App></App>, document.getElementById('mainApp'))

registerMicroApps([
  {
    name: 'react-app',
    entry: '//localhost:8888',
    container: '#reactApp',
    activeRule: '/react-app',
  },
  {
    name: 'vue-app',
    entry: '//localhost:8080',
    container: '#vueApp',
    activeRule: '/vue-app',
  },
  {
    name: 'ng-app',
    entry: '//localhost:4200',
    container: '#ngApp',
    activeRule: '/ng-app',
  }
])

setDefaultMountApp('/ng-app')
start()