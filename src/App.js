import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Offer from "./pages/Offer";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <NavBar />
      </Router>
    </>
  );
}

export default App;
