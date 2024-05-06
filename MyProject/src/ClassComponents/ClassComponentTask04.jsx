import React, { Component } from "react";

export default class ClassComponentTask04 extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: "",
      label: false,
    };
  }

  handle = () => {
    this.setState({
      label: !this.state.label,
      bgColor: (this.state.bgColor = "blue"),
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: "200px",
            width: "200px",
            border: "1px solid black",
            background: label ? this.state.bgColor : "red",
          }}
        ></div>

        <button
          style={{
            height: "50px",
            width: "150px",
            borderRadius: "20px",
            backgroundColor: "black",
            color: "white",
          }}
          onClick={this.handle}
        >
          Change Color
        </button>
      </div>
    );
  }
}
