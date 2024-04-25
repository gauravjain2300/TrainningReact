import React from "react";

export default function JsxExample01() {
  const subject = "javascript"; //js code
  const greetingMessage = <p>Good Morning</p>;

  return (
    <div>
      <h1>My Fav . Programming Language {subject}</h1> {/*html code */}
      {greetingMessage}
    </div>
  );
}
