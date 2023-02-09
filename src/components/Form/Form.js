import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

const initialState = {
  fields: {
    name: "",
    surname: "",
    birthday: "",
    number: "",
    web: "",
    about: "",
    technology: "",
    project: "",
  },
  errors: {
    name: "",
    surname: "",
    birthday: "",
    number: "",
    web: "",
    about: "",
    technology: "",
    project: "",
  },
  messages: {
    about: "",
    technology: "",
    project: "",
  },
  hasErrors: false,
  isFormSubmit: false,
};

class Form extends React.Component {
  state = JSON.parse(JSON.stringify(initialState));

  charNumber = (event) => {
    const fields = this.state.fields;
    const messages = this.state.messages;
    switch (event.target.id) {
      case "about":
        fields.about.length <= 600 && fields.about.length > 0
          ? (messages.about = `${fields.about.length}/600`)
          : (messages.about = "");
        break;
      case "technology":
        fields.technology.length <= 600 && fields.technology.length > 0
          ? (messages.technology = `${fields.technology.length}/600`)
          : (messages.technology = "");
        break;
      case "project":
        fields.project.length <= 600 && fields.project.length
          ? (messages.project = `${fields.project.length}/600`)
          : (messages.project = "");
    }
    this.setState({ messages });
  };

  handleChange = (event) => {
    const fields = this.state.fields;
    fields[event.target.id] = event.target.value.trim();
    this.charNumber(event);
    this.setState({ fields });
    this.validateForm(event);
    console.log(this.state.fields);
  };

  validateIfVoid = () => {
    const errors = this.state.errors;
    Array.from(document.querySelectorAll(".field")).forEach((element) => {
      if (!this.state.fields[element.id]) {
        errors[element.id] = "Поле обязательно для заполнения";
      }
    });
    this.setState({ errors });
  };

  handelSubmit = (event) => {
    const formSubmitInfo = this.props.formSubmitInfo;
    event.preventDefault();
    this.validateIfVoid();
    console.log(
      Object.values(this.state.errors).filter((element) => element !== "")
        .length
    );
    if (
      Object.values(this.state.errors).filter((element) => element !== "")
        .length === 0
    ) {
      formSubmitInfo(this.state);
    }
  };

  validateForm = (event) => {
    const fields = this.state.fields;
    const errors = this.state.errors;
    const messages = this.state.messages;
    const regexNumber = new RegExp(
      "^[0-9]{1}[)]?[-s.][0-9]{4}[-s.][0-9]{2}[-s.][0-9]{2}$"
    );
    const regexWeb = new RegExp("^https://");

    switch (event.target.id) {
      case "name":
        !fields.name
          ? (errors.name = "Поле обязательно для заполнения")
          : fields.name[0] !== fields.name.toUpperCase()[0]
          ? (errors.name = "Имя должно начинаться с заглавной буквы")
          : (errors.name = "");
        break;
      case "surname":
        !fields.surname
          ? (errors.surname = "Поле обязательно для заполнения")
          : fields.surname[0] !== fields.surname.toUpperCase()[0]
          ? (errors.surname = "Имя должно начинаться с заглавной буквы")
          : (errors.surname = "");
        break;
      case "birthday":
        !fields.birthday
          ? (errors.birthday = "Поле обязательно для заполнения")
          : (errors.birthday = "");
        break;
      case "number":
        !fields.number
          ? (errors.number = "Поле обязательно для заполнения")
          : !regexNumber.test(fields.number)
          ? (errors.number =
              "Номер телефона должен быть введен в указанном формате '7-7777-77-77'")
          : (errors.number = "");
        break;
      case "web":
        !fields.web
          ? (errors.web = "Поле обязательно для заполнения")
          : !regexWeb.test(fields.web)
          ? (errors.web =
              "Адрес должен быть введен в указанном формате 'https://...'")
          : (errors.web = "");
        break;
      case "about":
        !fields.about
          ? (errors.about = "Поле обязательно для заполнения")
          : fields.about.length > 600
          ? (errors.about = "Количество символов не должно привышать 600")
          : (errors.about = "");
        break;
      case "technology":
        !fields.technology
          ? (errors.technology = "Поле обязательно для заполнения")
          : fields.technology && fields.technology.length > 600
          ? (errors.technology = "Количество символов не должно привышать 600")
          : (errors.technology = "");
        break;
      case "project":
        !fields.project
          ? (errors.project = "Поле обязательно для заполнения")
          : fields.project && fields.project.length > 600
          ? (errors.project = "Количество символов не должно привышать 600")
          : (errors.project = "");
    }
    this.setState({ errors });
    this.setState({ messages });
  };

  handleDelete = (event) => {
    event.preventDefault();
    Array.from(document.querySelectorAll(".field")).map(
      (input) => (input.value = "")
    );
    const newState = JSON.parse(JSON.stringify(initialState));
    this.setState({ ...newState });
  };

  render() {
    return (
      <div className="app">
        <form className="form">
          <h1>Создание анкеты</h1>
          <Input
            id="name"
            type="text"
            placeholder="Имя"
            label="Имя"
            value={this.state.fields.name}
            handleChange={this.handleChange}
            validateForm={this.validateForm}
            error={this.state.errors.name}
          />
          <Input
            id="surname"
            type="text"
            placeholder="Фамилия"
            label="Фамилия"
            value={this.state.surname}
            handleChange={this.handleChange}
            error={this.state.errors.surname}
            validateForm={this.validateForm}
          />
          <Input
            id="birthday"
            type="date"
            placeholder="Дата рождения"
            label="Дата рождения"
            value={this.state.birthday}
            handleChange={this.handleChange}
            error={this.state.errors.birthday}
            validateForm={this.validateForm}
          />
          <Input
            id="number"
            type="tel"
            placeholder="Телефон"
            label="Телефон"
            value={this.state.number}
            handleChange={this.handleChange}
            error={this.state.errors.number}
            validateForm={this.validateForm}
          />
          <Input
            id="web"
            type="text"
            placeholder="Сайт"
            label="Сайт"
            value={this.state.web}
            handleChange={this.handleChange}
            error={this.state.errors.web}
            validateForm={this.validateForm}
          />
          <Input
            id="about"
            type="textarea"
            placeholder="О себе"
            label="О себе"
            value={this.state.element}
            handleChange={this.handleChange}
            error={
              this.state.messages.about
                ? this.state.messages.about
                : this.state.errors.about
            }
            validateForm={this.validateForm}
          />
          <Input
            id="technology"
            type="textarea"
            placeholder="Стек технологий"
            label="Стек технологий"
            value={this.state.technology}
            handleChange={this.handleChange}
            error={
              this.state.messages.technology
                ? this.state.messages.technology
                : this.state.errors.technology
            }
            validateForm={this.validateForm}
          />
          <Input
            id="project"
            type="textarea"
            placeholder="Описание последнего проекта"
            label="Описание последнего проекта"
            value={this.state.project}
            handleChange={this.handleChange}
            error={
              this.state.messages.project
                ? this.state.messages.project
                : this.state.errors.project
            }
            validateForm={this.validateForm}
          />
          <div className="button-block">
            <Button name="Отмена" onClick={this.handleDelete}></Button>
            <Button
              type="submit"
              onClick={this.handelSubmit}
              name="Сохранить"
            ></Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
