import React from "react";
import Button from "../Button/Button";
import "./FinalForm.css";

class FinalForm extends React.Component {
  render() {
    return (
      <div className="final-form">
        <h1>
          {this.props.info.name} {this.props.info.surname}{" "}
        </h1>
        <p className="field">Дата рождения: {this.props.info.birthday}</p>
        <p className="field">Номер телефона: {this.props.info.number}</p>
        <p className="field">Сайт: {this.props.info.web}</p>
        <p className="field">О себе: {this.props.info.about}</p>
        <p className="field">Стек технологий: {this.props.info.technology}</p>
        <p className="field">
          Описание последнего проекта: {this.props.info.project}
        </p>
        <Button name="Назад" onClick={this.props.formSubmit}></Button>
      </div>
    );
  }
}

export default FinalForm;
