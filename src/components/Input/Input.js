import React from "react";
import "./Input.css";

class Input extends React.Component {
  render() {
    return (
      <div className="input-field">
        <label htmlFor={this.props.id}> {this.props.label} </label>
        {this.props.type !== "textarea" ? (
          <input
            id={this.props.id}
            className="input field"
            type={this.props.type}
            placeholder={this.props.placeholder}
            onChange={this.props.handleChange}
            onBlur={this.props.validateForm}
            value={this.props.value}
          />
        ) : (
          <textarea
            id={this.props.id}
            className="textarea field"
            rows="7"
            placeholder={this.props.placeholder}
            onChange={this.props.handleChange}
            onBlur={this.props.validateForm}
            value={this.props.value}
          />
        )}
        {this.props.error && <span className="error">{this.props.error}</span>}
      </div>
    );
  }
}

export default Input;
