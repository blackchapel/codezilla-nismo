import React, {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import MyProfile from "./components/MyProfile";
import NavBar from "./components/NavBar";
import OtpSignup from "./components/OtpSignup";
import Signup from "./components/Signup";

function App() {

  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
     <Route path="/dashboard" element={<Dashboard />}/>
     <Route path="/" element={<Home />}/>
     <Route path="/signup" element={<Signup />} />
     <Route path="/login" element={<Login />} />
     <Route path="/forgotpassword" element={<ForgotPassword />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/otpverification" element={<OtpSignup />} />
     <Route path="/myprofile" element={<MyProfile />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
