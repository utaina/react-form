import React from "react";
import "./Button.css";

export default function Button ({handelClick, type, name}) {
    return (
      <button
        onClick={handelClick}
        className="button"
        type={type}
      >
        {name}
      </button>
    );
  }