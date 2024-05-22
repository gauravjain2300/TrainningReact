import React from "react";

export default function ChildComponen05(props) {
  return (
    <div>
      <h1>{props.subject}</h1>
    </div>
  );
}

ChildComponen05.defaultProps = {
  subject: "React Js",
};
