import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import Login from "./Login";
import UrlShortner from "./UrlShortner";
import QrCode from "./QrCode";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shortner" element={<UrlShortner />} />
        <Route path="/qrcode" element={<QrCode />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
