import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackMessage() {
  const navigate = useNavigate();

  useEffect(() => navBack());

  const navBack = () => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="App">
      <div className="feedback">
        <h1>Thank you for your feedback!</h1>
        <p>We appreciate you taking the time to help us improve.</p>
        <button onClick={() => navigate("/")} className="btn btn-dark">
          Back To Form
        </button>
      </div>
    </div>
  );
}

export default FeedbackMessage;
