import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import RouterView from "./routerView";
import { routes } from "./routesConfig";
function RootRouter() {
  return (
    <BrowserRouter>
      <RouterView routes={routes}></RouterView>
    </BrowserRouter>
  );
}

export default RootRouter;
