import React from "react";
import { Routes, Route } from "react-router-dom";
import Chatpage from "./Chatpage";
import Login from "./Login";
import Signup from "./Signup";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<Chatpage />} />
        
      </Routes>
    </div>
  );
};

export default Mainroutes;
