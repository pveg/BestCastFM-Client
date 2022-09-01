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
import PodcastDetails from "./pages/Podcasts/PodcastDetails";
import AboutPage from "./pages/AboutPage/AboutPage";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
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
        <Route
          path="/podcasts/:podcastId"
          element={
            <Private>
              <PodcastDetails />
            </Private>
          }
        />
        <Route
          path="/profile"
          element={
            <Private>
              <Profile />
            </Private>
          }
        />
        <Route
          path="/profile/edit-profile"
          element={
            <Private>
              <EditProfile />
            </Private>
          }
        />
        <Route path="*" element={<errorPage />} />
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/how-it-works" element={<HowItWorks/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
