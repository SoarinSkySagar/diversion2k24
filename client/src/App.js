import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import StudentDetails from "./pages/StudentDetails";
import TeacherDetails from "./pages/TeacherDetails";
import SelectPage from "./pages/SelectPage";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Explore from "./pages/Explore";

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<SignIn />}></Route>
          <Route path="/Sign-Up" element={<SignUp />}></Route>
          <Route path="/TeacherDetails" element={<TeacherDetails />}></Route>
          <Route path="/StudentDetails" element={<StudentDetails />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Forgot-Password" element={<ForgotPassword />}></Route>
          <Route path="/select" element={<SelectPage/>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/fgt" element={<ForgotPassword />}></Route>
          <Route path="/dash" element={<Dashboard/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
          <Route path="/select" element={<SelectPage/>}></Route>
          <Route path="/supdate" element={<StudentDetails/>}></Route>
          <Route path="/tupdate" element={<TeacherDetails/>}></Route>
          <Route path="/explore" element={<Explore/>}></Route>
          <Route path="/chat" element={<Chat/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
