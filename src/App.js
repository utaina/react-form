import React from "react";
import Input from "./components/Input";
import "./App.css";

class App extends React.Component {
  render() {
  return (
    <div className="app">
     <form className="form">
      <h1>Создание анкеты</h1>
       <Input id="name" element="input" type="text" placeholder="Имя" label="Имя"/>
       <Input id="surname" element="input" type="text" placeholder="Фамилия" label="Фамилия"/>
       <Input id="birthday" element="input" type="date" placeholder="Дата рождения" label="Дата рождения"/>
       <Input id="number" element="input" type="tel" placeholder="Телефон" label="Телефон"/>
       <Input id="web" element="input" type="text" placeholder="Сайт" label="Сайт"/>
       <Input id="about" element="textarea" placeholder="О себе" label="О себе"/>
       <Input id="technology" element="textarea" placeholder="Стек технологий" label="Стек технологий"/>
       <Input id="project" element="textarea" placeholder="Описание последнего проекта" label="Описание последнего проекта"/>
       <div className="button-block">
        <button className="button" type="submit">Отмена</button>
        <button className="button" type="button">Сохранить</button> 
      </div>
     </form>
    </div>
  );
  }
}

export default App;