import React from "react";

export default function MyFunctionTable() {
  const subjectlist = ["C", "Python", "React js", "Mernstack"];

  const marks = [10, 20, 30, 40];
  return (
    <div>
      <table>
        <tbody>
          <tr>
            {subjectlist.map((e, i) => {
              return <th key={i}>{e}</th>;
            })}
          </tr>

          <tr>
            {marks.map((e, i) => {
              return <td key={i}>{e}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// console.log(subjectlist);
