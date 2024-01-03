import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MatchFeed from "./pages/MatchFeed";

import ChatAndRequest from "./pages/ChatAndRequest";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import AstroMatch from "./pages/AstroMatch";
import ProfileSettings from "./pages/ProfileSettings";
import PrivateRoutes from "./pages/PrivateRoutes";
import { useCookies } from "react-cookie";

import Home from "./pages/Home";


function App() {
  // const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       <Navigate to="/" />
  //     }
  //     verifyCookie();
  //   };
  // });

  return (
    <BrowserRouter>
      {/* <Routes> */}
      {/* {cookies.token ? ( */}
        <Routes>
          <Route path="/matchfeed" element={<MatchFeed />} />
          <Route path="/chat-request" element={<ChatAndRequest />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/register" element={<Register />} />
          <Route path="/astromatch" element={<AstroMatch />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />

        {/* </Routes> */}
      {/* ) : ( */}
        {/* <Routes> */}
          <Route path="/" element={<Home />} />
        </Routes>
      {/* )} */}
      {/* </Routes> */}
    </BrowserRouter>
  );
}

export default App;
