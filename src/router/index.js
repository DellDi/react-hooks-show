/*
 * @Author: Dell_Di
 * @Date: 2020-01-07 09:23:35
 * @LastEditors  : Dell_Di
 * @LastEditTime : 2020-01-17 16:03:36
 * @FilePath: \myReact\src\router\index.js
 */
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";
import { routes } from "./routes";
function Router() {
  return (
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  );
}

export default Router;
