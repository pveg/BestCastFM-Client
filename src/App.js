import Nav from "./components/Navbar/Nav";
import Background from "./components/Background/Background";
import { Routes, Route } from "react-router-dom";
import Private from "./components/Private";
import Anon from "./components/Anon";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Nav />
        <div className="flex justify-center flex-col items-center">
          <Background className="flex justify-center" />
        </div>
      </div>
      <Routes>
        <Route
          path="/signup"
          element={
            <Anon>
              <Signup />
            </Anon>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
