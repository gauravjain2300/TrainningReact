import React from "react";

export default function ChildArrayComponent06(props) {
  return (
    <div>
      {props.products.map((e, i) => {
        return (
          <h1 style={{ color: "white", textAlign: "center" }} key={i}>
            {e}
          </h1>
        );
      })}
    </div>
  );
}
