import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MatchFeed from "./pages/MatchFeed";
import ChatAndRequest from "./pages/ChatAndRequest";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import AstroMatch from "./pages/AstroMatch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/matchfeed" element={<MatchFeed />} />
        <Route path="/chat-request" element={<ChatAndRequest />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/astromatch" element={<AstroMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
