import React from "react";
import ReactDOM, { render } from "react-dom";
import {RecoilRoot} from 'recoil'
import App from './App'

render(<RecoilRoot><App></App></RecoilRoot>, document.getElementById('reactApp'))