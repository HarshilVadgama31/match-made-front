import React, {useEffect} from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoutes = () => {

  const [cookies, removeCookie] = useCookies([]);
  let auth = { token: false };

  useEffect(() => {
    const verifyCookie = () => {
      if (cookies.token) {
        console.log(cookies);
        auth.token = true;
      }
      verifyCookie();
    };
  }, []);

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
