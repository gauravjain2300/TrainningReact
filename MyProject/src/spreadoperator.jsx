import React from "react";

export default function spreadoperator() {
  var myarray = ["c", "C++", "Mernstack", "Javascript"];

  console.log(myarray);
  var newArray = [...myarray, "React"];
  console.log(newArray);

  return <div>spreadoperator</div>;
}
