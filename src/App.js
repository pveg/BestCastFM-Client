import Nav from "./components/Navbar/Nav";
import Background from "./components/MainComponents/Background";
import { Routes, Route } from "react-router-dom";
import Private from "./components/Private";
import Anon from "./components/Anon";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Background />} />
        <Route
          path="/signup"
          element={
            <Anon>
              <Signup />
            </Anon>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<errorPage />} />
      </Routes>
    </>
  );
}

export default App;
