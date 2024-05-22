import React, { Component } from "react";

export default class ChildComponent06 extends Component {
  render() {
    const { myfun, marks } = this.props;
    return (
      <div>
        <button onClick={myfun}>CLick</button>
        <h1>{marks}</h1>
      </div>
    );
  }
}
