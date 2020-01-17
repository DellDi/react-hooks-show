/*
 * @Author: Dell_Di
 * @Date: 2020-01-06 09:08:34
 * @LastEditors  : Dell_Di
 * @LastEditTime : 2020-01-17 15:09:09
 * @FilePath: \myReact\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import RouterView from './router'

import "./index.css"; // 初始化样式表

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <RouterView />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
