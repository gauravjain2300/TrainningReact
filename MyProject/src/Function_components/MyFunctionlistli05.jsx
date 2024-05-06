import React from "react";

export default function MyFunctionlistli05() {
  const subjectlist = ["c", "Python", "React js", "Mernstack"];

  return (
    <div>
      <ul>
        {subjectlist.map((e, i) => {
          return <li key={i}>{e}</li>;
        })}
      </ul>
    </div>
  );
}
