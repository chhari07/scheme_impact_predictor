import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Features from "./pages/Features";
import ErrorBoundary from "./components/ErrorBoundary"; // Import the ErrorBoundary component
import Schemes from "./pages/Schemes";

const App = () => {
  return (
    <>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/schemes" element={<Schemes />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;
