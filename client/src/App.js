import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import SelectPage from "./pages/SelectPage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<SignIn />}></Route>
          <Route path="/Sign-Up" element={<SignUp />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Forgot-Password" element={<ForgotPassword />}></Route>
          <Route path="/select" element={<SelectPage/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/fgt" element={<ForgotPassword />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
