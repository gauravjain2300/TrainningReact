import React, { Component } from "react";

export default class Classcomponentexample04 extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  handleButton = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div
        style={{ margin: "0 auto", textAlign: "center", paddingTop: "50px" }}
      >
        {this.state.isVisible ? (
          <h1 style={{ color: "white" }}>Hello</h1>
        ) : (
          <h1 style={{ color: "white" }}>Hii</h1>
        )}
        <button
          onClick={this.handleButton}
          style={{
            width: "200px",
            height: "30px",
            backgroundColor: "orange",
            fontWeight: "900",
            color: "white",
            textAlign: "center",
            borderRadius: "20px",
          }}
        >
          Click here
        </button>
      </div>
    );
  }
}
