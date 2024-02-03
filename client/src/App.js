import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Sign-In" element={<SignIn />}></Route>
          <Route path="/Sign-Up" element={<SignUp />}></Route>
          <Route path="/Forgot-Password" element={<ForgotPassword />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
