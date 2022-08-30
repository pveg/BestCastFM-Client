import Nav from "./components/Navbar/Nav";
import Background from "./components/MainComponents/Background";
import { Routes, Route } from "react-router-dom";
import Private from "./components/Private";
import Anon from "./components/Anon";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/Profile/EditProfile";
import SearchPodcasts from "./pages/Podcasts/Podcasts";
import Footer from "./components/Footer/Footer";

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
        <Route
          path="/search-podcasts"
          element={
            <Private>
              <SearchPodcasts />
            </Private>
          }
        />
        <Route path="/profile" element={
          <Private>
        <Profile />
          </Private>
        } />
        <Route path="/profile/edit-profile" element={<EditProfile />} />
        <Route path="*" element={<errorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
