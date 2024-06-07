import React from "react";

export default function QuestionAndAnwer() {
  const List = ["Pizza", "Pasta", "Sandwhich", "Burger"];

  return (
    <div>
      <h1>QuestionAndAnwer</h1>

      <br />
      <h2>1 What is React js?</h2>
      <p>
        React is a JavaScript library for building user interfaces on the
        website, With the help of react js we can make the non refreshable
        website
      </p>

      <br />
      <h2>2 What is NPM in React Js?</h2>
      <p> npm: node package manager - using of npm we can install packages</p>

      <br />
      <h2>3 What is Role of Node Js in react Js</h2>
      <p>
        environment for javascript- using of node we can execute and run js
        files which is provide npm and npx
      </p>

      <br />
      <h2>4 What is Components in React Js?</h2>
      <p>
        {" "}
        components are block of code. Which we can reuse. it is the combination
        of html,css, JavaScript. React is all about components, single
        responsibility
      </p>

      <br />

      <h2> 5-What is CLI command In React Js?</h2>
      <p>
        React has its own command-line interface (CLI) commands. However, these
        CLI commands are currently only used to create a passable version of a
        react application using the command line.{" "}
      </p>

      <h2>6 What is Header and Content Components in React Js?</h2>
      <p>
        -Header Component: A Header component is a reusable piece of code that
        represents the top section of a web page. It typically contains the
        website's logo, navigation menu, and other essential elements that are
        consistent across all pages.
        <br />
        -Content Component: A Content component, on the other hand, represents
        the main content area of a web page. It contains the dynamic content
        that changes depending on the page or user interaction. The Content
        component is usually placed below the Header component
      </p>

      <h2>
        {" "}
        7 How to install React Js on Windows, Linux Operating System? How to
        Install NPM and How to check version of NPM?
      </h2>

      <p>
        For react installatiion: npm install create-react-app or npm install -g
        create-react-app
        <br />
        need to check version of node js node -v npm-v
      </p>
      <br />
      <h2> 8.How to check version of React Js?</h2>
      <p> command line.npm view react version</p>

      <h2> 9 How to change in components of React Js?</h2>
      <p>
        -by using useState in Functional component we can change the value of
        component on any event .
      </p>

      <h2>10How to Create a List View in React Js?</h2>
      <ul>
        {List.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}
