import React, { Component } from "react";

export default class UseRefExample extends Component {
  constructor() {
    super();
    this.namefield = React.createRef();
    this.setState = { name: "" };
  }

  handleSubmit = () => {
    if (this.namefield.current.value.length < 4) {
      alert("Name Must be 4 Charcters required");
    } else {
      console.log("All okk");
      this.setState({ name: this.namefield.current.value });
    }
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.namefield} placeholder="enter Name" />
        <button onClick={this.handleSubmit}>Save</button>
      </div>
    );
  }
}
