import React, { Component } from "react";
import ChildComponent05 from "./ChildComponent05";

export default class ParentComponent05 extends Component {
  render() {
    //destructor

    const { subject, marks } = this.props;
    return (
      <div>
        <ChildComponent05 subject="flutter" marks="89" />
      </div>
    );
  }
}
