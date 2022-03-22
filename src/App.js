import Write from "./pages/Write";
import { BrowserRouter, Routes, Router, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TopBar from "./components/Topbar";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
