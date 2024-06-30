import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import IncrementDecrement from "./IncrementDecrement/IncrementDecrement";
import QuestionAndAnwer from "./QuestionAndAnswer/QuestionAndAnwer";

import StyleComponent from "./StyleComponent/StyleComponent";
import ApiFetch from "./ApiFetch/ApiFetch";
import AllComponents from "./StyleRouting/AllComponents";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      {/* <IncrementDecrement /> */}
      {/* <QuestionAndAnwer /> */}
      {/* <FirstComponent /> */}
      {/* <FirstComponent /> */}
      {/* <StyleComponent /> */}
      {/* <ApiFetch /> */}
      <AllComponents />
    </>
  );
}

export default App;
