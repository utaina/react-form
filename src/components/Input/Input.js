import React from "react";
import "./Input.css";

export default function Input ({id, type, placeholder, label, value, handelChange, error}) {
    return (
      <div className="input-field">
        <label htmlFor={id}> {label} </label>
        {type !== "textarea" ? (
          <input
            id={id}
            className="input field"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handelChange}
            error={error}
          />
        ) : (
          <textarea
            id={id}
            className="textarea field"
            rows="7"
            placeholder={placeholder}
            value={value}
            onChange={handelChange}
            error={error}
          />
        )}
        {error && <span className="error">{error}</span>}
        {(type === "textarea" && (value && value.length >=1) && (value.length <=600)) && <span className="text-length">{value.length}/600</span>}
      </div>
    );
  }