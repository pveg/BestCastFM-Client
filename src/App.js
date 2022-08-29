import { NextUIProvider } from "@nextui-org/react";
import Nav from "./components/Navbar/Nav";
import Background from "./components/Background/Background";
import Login1 from "./pages/Login/Login";
import { Routes, Route } from "react-router-dom";
import Private from "./components/Private";
import Anon from "./components/Anon";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Background />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
