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
import Footer from "./layout/Footer";
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme(  {
    palette: {
      type: 'light',
      primary: {
        main: '#8fd071',
      },
      secondary: {
        main: '#1F4910',
      },
    },
    typography: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeightRegular: 500,
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
   <BrowserRouter>
   <NavBar />
   <Routes>
     <Route path="/dashboard" element={<Dashboard />}/>
     <Route path="/" element={<Home />}/>
     <Route path="/signup" element={<Signup theme={theme} />} />
     <Route path="/login" element={<Login />} />
     <Route path="/forgotpassword" element={<ForgotPassword />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/otpverification" element={<OtpSignup />} />
     <Route path="/myprofile" element={<MyProfile />} />
   </Routes>
   <Footer />
   </BrowserRouter>
   </ThemeProvider>
  );
}

export default App;
