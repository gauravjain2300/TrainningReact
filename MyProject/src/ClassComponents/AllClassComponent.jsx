import React, { Component } from "react";
import Example1 from "./Example1";
import ClassComponentExample02 from "./ClassComponentExample02";
import ClassComponentIncrementdecrement from "./ClassComponentIncrementdecrement";
import ClassComponentTask04 from "./ClassComponentTask04";
import Classcomponentexample04 from "./Classcomponentexample04";
import ParentComponent05 from "./ParentComponent05";
import ParentComponentClass06 from "./ParentComponentClass06";

export default class AllClassComponent extends Component {
  render() {
    return (
      <div>
        {/* <Example1 /> */}
        {/* <ClassComponentExample02 /> */}
        {/* <ClassComponentIncrementdecrement /> */}
        {/* <ClassComponentTask04 /> */}
        {/* <Classcomponentexample04 /> */}
        {/* <ParentComponent05 /> */}
        <ParentComponentClass06 />
      </div>
    );
  }
}
