import React from "react";
// import { useState } from "react";

function FormGroup({ name, label, placeholder, value, onChange, textArea }) {
  return (
    <div className="form-group">
      {/* <label htmlFor={name}>{label}</label> */}
      {!textArea ? (
        <input
          type={name === "email" ? "email" : "text"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <textarea
          rows="5"
          width="100%"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
}

export default FormGroup;
