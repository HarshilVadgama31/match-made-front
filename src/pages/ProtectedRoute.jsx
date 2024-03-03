import React from "react";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import { Route, Navigate } from "react-router-dom";

export const getToken = ({children}) => {
  const [cookies, removeCookie] = useCookies([]);
  //   const cookies = new Cookies();
  console.log(cookies.token);
  //   return cookies.get("token");
  if (!cookies.token) {
    return <Navigate to="/login" />;
  }

  return children;
  // return cookies.token;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!getToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
      }
    />
  );
};

export default ProtectedRoute;
