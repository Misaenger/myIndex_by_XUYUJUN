import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/styles/common.scss'
import App from './App.js';    // 根组件
import 'lib-flexible';
import { useNavigate } from "react-router-dom";

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// let NavigateTo = function (e) {
//   let {url} = e.target.dataset
//   useNavigate(url);
// }
// React.$navigateTo = NavigateTo