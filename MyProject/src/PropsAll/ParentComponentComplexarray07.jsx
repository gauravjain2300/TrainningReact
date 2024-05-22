import React from "react";
import ChildComponentComplexarray07 from "./ChildComponentComplexarray07";

export default function ParentComponentComplexarray07() {
  const products = [
    { id: 1, name: "AAA", subject: "Node" },
    { id: 2, name: "Gaurav  ", subject: "Frontend" },
    { id: 3, name: "BBB", subject: "REact" },
    { id: 4, name: "CCCC", subject: "Flutter" },
  ];

  return (
    <div>
      <ChildComponentComplexarray07 products={products} />
    </div>
  );
}
