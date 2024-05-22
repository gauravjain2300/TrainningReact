import React from "react";

export default function ChildarrayTask(props) {
  return (
    <div>
      {props.userinfo.map((item, i) => {
        return (
          <div style={{ textAlign: "center", color: "white" }} key={i}>
            <table>
              <tr>
                {/* <th>id</th> */}
                <th>Name</th>
                <th>Subject</th>
                <th>City</th>
              </tr>

              <tr>
                {/* <td>{item.id}</td> */}
                <td>{item.name}</td>
                <td> {item.subject}</td>
                <td>{item.City}</td>
                {/* <td>{item.City}</td> */}
              </tr>
            </table>
          </div>
        );
      })}
    </div>
  );
}

// <div style={{ textAlign: "center", color: "white" }} key={i}>
