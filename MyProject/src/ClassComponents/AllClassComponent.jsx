import React, { Component } from "react";
import Example1 from "./Example1";
import ClassComponentExample02 from "./ClassComponentExample02";
import ClassComponentIncrementdecrement from "./ClassComponentIncrementdecrement";
import ClassComponentTask04 from "./ClassComponentTask04";

export default class AllClassComponent extends Component {
  render() {
    return (
      <div>
        {/* <Example1 /> */}
        {/* <ClassComponentExample02 /> */}
        {/* <ClassComponentIncrementdecrement /> */}
        <ClassComponentTask04 />
      </div>
    );
  }
}
