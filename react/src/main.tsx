import './public-path'
import React from "react";
import ReactDOM from "react-dom";
import {RecoilRoot} from 'recoil'
import App from './App'
import {MicroAppStateActions} from './store'


function render(props) {
  const { container } = props;
  ReactDOM.render(<RecoilRoot><App></App></RecoilRoot>, container ? container.querySelector('#reactApp') :document.getElementById('reactApp'))
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped')
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  let MicroAppStateActionsInstance = MicroAppStateActions.getInstance()
  MicroAppStateActionsInstance.setMicroAppStateActions(props.onGlobalStateChange,props.setGlobalState,props.offGlobalStateChange)
  render(props)
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container?container.querySelector('#reactApp') : document.querySelector('#reactApp'))
}