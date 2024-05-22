import React from "react";
import ChildArrayComponent06 from "./ChildArrayComponent06";

export default function ParentArraysendComponent06() {
  const myarray = ["c", "c++", "javaScript", "React js"]; // array
  return (
    // {Note: key is inbuilt prop in react js we can take it as as a custom prop}
    <div>
      <ChildArrayComponent06 products={myarray} />
    </div>
  );
}
