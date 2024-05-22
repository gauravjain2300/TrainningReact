import React from "react";

export default function ChildComponentComplexarray07(props) {
  return (
    <div>
      {props.products.map((item, i) => {
        return (
          <div style={{ textAlign: "center", color: "white" }} key={i}>
            <h3>{item.id}</h3>
            <h3>{item.name}</h3>
            <h3>{item.subject}</h3>
          </div>
        );
      })}
    </div>
  );
}
