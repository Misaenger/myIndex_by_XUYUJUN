import React from 'react';
import ReactDOM from 'react-dom';
import'./index.css';
import'./assets/styles/common.scss'
import App from './App.js';    // 根组件
import 'lib-flexible';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);