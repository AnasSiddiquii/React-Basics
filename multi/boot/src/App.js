import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Users from "./pages/users";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>

      <Header />

      <Routes>
        <Route path="/pwa/" element={<Home />} />
        <Route path="/pwa/users" element={<Users />} />
        <Route path="/pwa/about" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
