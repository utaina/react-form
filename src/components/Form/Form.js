import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";
import { validateForm } from "../../utils";

const initialState = {
  name: "",
  surname: "",
  birthday: "",
  number: "",
  web: "",
  about: "",
  technology: "",
  project: "",
};

export default function Form({ formSubmit }) {
  const [fields, setFields] = useState({ ...initialState });
  const [errors, setErrors] = useState({ ...initialState });

  function handelChange(event) {
    setErrors((errors) => {
      return {
        ...errors,
        [event.target.id]: "",
      };
    });
    setFields((fields) => {
      return {
        ...fields,
        [event.target.id]: event.target.value,
      };
    });
  }

  function handelDelete(event) {
    event.preventDefault();
    setFields({ ...initialState });
    setErrors({ ...initialState });
  }

  function handelSubmit(event) {
    event.preventDefault();
    const validationErrors = validateForm(fields);
    setErrors(() => {
      return {
        ...initialState,
        ...validationErrors,
      };
    });
    if (!Object.values(validationErrors).filter((value) => value !== "").length)
      formSubmit(fields);
  }

  return (
    <form className="form">
      <h1>Создание анкеты</h1>
      <Input
        id="name"
        type="text"
        placeholder="Имя"
        label="Имя"
        value={fields.name}
        handelChange={handelChange}
        error={errors.name}
      />
      <Input
        id="surname"
        type="text"
        placeholder="Фамилия"
        label="Фамилия"
        value={fields.surname}
        handelChange={handelChange}
        error={errors.surname}
      />
      <Input
        id="birthday"
        type="date"
        placeholder="Дата рождения"
        label="Дата рождения"
        value={fields.birthday}
        handelChange={handelChange}
        error={errors.birthday}
      />
      <Input
        id="number"
        type="tel"
        placeholder="Телефон"
        label="Телефон"
        value={fields.number}
        handelChange={handelChange}
        error={errors.number}
      />
      <Input
        id="web"
        type="text"
        placeholder="Сайт"
        label="Сайт"
        value={fields.web}
        handelChange={handelChange}
        error={errors.web}
      />
      <Input
        id="about"
        type="textarea"
        placeholder="О себе"
        label="О себе"
        value={fields.about}
        handelChange={handelChange}
        error={errors.about}
      />
      <Input
        id="technology"
        type="textarea"
        placeholder="Стек технологий"
        label="Стек технологий"
        value={fields.technology}
        handelChange={handelChange}
        error={errors.technology}
      />
      <Input
        id="project"
        type="textarea"
        placeholder="Описание последнего проекта"
        label="Описание последнего проекта"
        value={fields.project}
        handelChange={handelChange}
        error={errors.project}
      />
      <div className="button-block">
        <Button name="Отмена" handelClick={handelDelete} />
        <Button type="submit" name="Сохранить" handelClick={handelSubmit} />
      </div>
    </form>
  );
}
