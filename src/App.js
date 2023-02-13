import React, { useState } from "react";
import Form from "./components/Form/Form";
import FinalForm from "./components/FinalForm/FinalForm";
import { createPortal } from "react-dom";
import Modal from "./components/Modal/Modal";
import "./App.css";

export default function App() {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [showModal, setShowModal] = useState(false);

  function formSubmit(info) {
    setFormInfo({ ...info });
    setIsFormSubmit(true);
    setShowModal(true);
  }

  return (
    <div className="app">
      {isFormSubmit ? (
        <FinalForm info={formInfo} />
      ) : (
        <Form formSubmit={formSubmit} />
      )}
      {showModal &&
        createPortal(
          <Modal onClose={() => setShowModal(false)} />,
          document.body
        )}
    </div>
  );
}
