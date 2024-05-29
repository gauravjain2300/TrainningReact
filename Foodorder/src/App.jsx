import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AllComponent from "./Component/AllComponent";
import SecondComponent from "./Component/SecondComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AllComponent />
      {/* <SecondComponent /> */}
    </>
  );
}

export default App;
