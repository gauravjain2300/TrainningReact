import React, { Component } from "react";

export default class ReactCreateExample1 extends Component {
  //   constructor(props) {
  //     super(props);
  //   }
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  handlebutton = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} placeholder="Enter Name" />
        <button onClick={this.handlebutton}>Click</button>
      </div>
    );
  }
}
