import Write from "./pages/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TopBar from "./components/Topbar";

function App() {
  return (
    <Router>
      <TopBar />

      <Routes>
        <Route path="register" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;
