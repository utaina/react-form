import React from "react";
import "./FinalForm.css";

export default function FinalForm ({info}) {
    return (
      <div className="final-form">
        <h1>
          {info.name} {info.surname}
        </h1>
        <p className="field">Дата рождения: {info.birthday}</p>
        <p className="field">Номер телефона: {info.number}</p>
        <p className="field">Сайт: {info.web}</p>
        <p className="field">О себе: {info.about}</p>
        <p className="field">Стек технологий: {info.technology}</p>
        <p className="field">Описание последнего проекта: {info.project}</p>
      </div>
    );
  }
