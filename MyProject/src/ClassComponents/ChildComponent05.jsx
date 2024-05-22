import React, { Component } from "react";

export default class ChildComponent05 extends Component {
  render() {
    const { subject, marks } = this.props;
    return (
      <div style={{ textAlign: "center", color: "white" }}>
        <h1>Subject :{subject}</h1>
        <h2>marks :{marks}</h2>
      </div>
    );
  }
}
