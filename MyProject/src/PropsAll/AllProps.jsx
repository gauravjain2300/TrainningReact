import React from "react";
import ParentProp from "./ParentProp";
import Parentcomponent02 from "./Parentcomponent02";
import ParentComponent03 from "./ParentComponent03";
import ParentComponent04 from "./ParentComponent04";
import ParentComponent05 from "./ParentComponent05";
import ParentArraysendComponent06 from "./ParentArraysendComponent06";
import ParentComponentComplexarray07 from "./ParentComponentComplexarray07";

export default function AllProps() {
  return (
    <div>
      {/* Pass single or multiple variable one component to child component */}
      {/* <ParentProp /> */}
      {/* <br />
       */}
      {/* Multiple line sending content to child */}
      {/* <Parentcomponent02 /> */}
      {/* <br /> */}
      {/* FUnction Transfering to child COmponent */}
      {/* <ParentComponent03 /> */}
      {/* <ParentComponent04 /> */}
      <ParentComponent05 />
      {/* <ParentArraysendComponent06 /> */}\
      {/* <ParentComponentComplexarray07 /> */}
    </div>
  );
}
