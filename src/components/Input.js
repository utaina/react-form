import React from "react";
import "./Input.css";

class Input extends React.Component {
            render() {
                const element = this.props.element === "input" ? (
                    <input 
                      className="input"
                      name={this.props.name} 
                      type={this.props.type} 
                      placeholder={this.props.placeholder}
                     />) : (
                      <textarea
                      className="textarea" 
                      name={this.props.name} 
                      rows= "7"
                      placeholder={this.props.placeholder}
                      />
                  );
            return (
                <div className="input-field">
                    <label htmlFor={this.props.id}> {this.props.label} </label>
                    {element}
                </div>
            ) };
    } 

export default Input;