import React from "react";
// import Router from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import FormPage from "./components/FormPage";
import FeedbackMessage from "./components/FeedbackMessage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/feedback" element={<FeedbackMessage />} />
    </Routes>
  );
}

export default App;
