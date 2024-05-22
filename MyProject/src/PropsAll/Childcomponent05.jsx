import React from "react";

export default function ChildComponent05(props) {
  return (
    <div>
      <h1>{props.subject}</h1>
    </div>
  );
}
ChildComponent05.defaultProps = {
  subject: "React js",
};
