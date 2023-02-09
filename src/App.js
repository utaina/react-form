import React from "react";
import Form from "./components/Form/Form";
import FinalForm from "./components/FinalForm/FinalForm";
import "./App.css";

class App extends React.Component {
  state = {};

  formSubmitInfo = (info) => {
    this.setState(info.fields);
    this.setState({ isFormSubmit: true });
  };
  formSubmit = (event) => {
    event.preventDefault();
    this.setState({ isFormSubmit: false });
  };

  render() {
    const isFormSubmit = this.state.isFormSubmit;
    let content;
    if (!isFormSubmit) {
      content = <Form formSubmitInfo={this.formSubmitInfo}></Form>;
    } else {
      content = (
        <FinalForm info={this.state} formSubmit={this.formSubmit}></FinalForm>
      );
    }
    return <div className="app">{content}</div>;
  }
}

export default App;
