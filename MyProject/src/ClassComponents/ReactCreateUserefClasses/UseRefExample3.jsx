import React, { Component } from "react";

export default class UseRefExample3 extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  handleButton = () => {
    this.inputRef.current.style.color = "blue";
    this.inputRef.current.readOnly = !this.inputRef.current.readOnly;
    this.inputRef.current.style.width = "300px";
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="Enter Name" />
        <button onClick={this.handleButton}>Click here</button>
      </div>
    );
  }
}
