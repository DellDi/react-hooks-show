/*
 * @Author: Dell_Di
 * @Date: 2020-01-15 17:37:56
 * @LastEditors: Dell_Di
 * @LastEditTime: 2020-01-15 17:38:46
 * @FilePath: \myReact\src\components\App.js
 */
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// components
// import Layout from "./Layout";

// views
import Error from "../views/error";
// import Login from "../views/login";

// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        {/* <PrivateRoute path="/app" component={Layout} />
        <PublicRoute path="/login" component={Login} /> */}
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );

  // #######################################################################

//   function PrivateRoute({ component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isAuthenticated ? (
//             React.createElement(component, props)
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             />
//           )
//         }
//       />
//     );
//   }

//   function PublicRoute({ component, ...rest }) {
//     return (
//       <Route
//         {...rest}
//         render={props =>
//           isAuthenticated ? (
//             <Redirect
//               to={{
//                 pathname: "/",
//               }}
//             />
//           ) : (
//             React.createElement(component, props)
//           )
//         }
//       />
//     );
//   }
}
