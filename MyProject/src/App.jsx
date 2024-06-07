// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
// import JsxExample from "./JSX_Examples/MyFirstComponent";
import MyFirstComponent from "./JSX_Examples/MyFirstComponent";
import JsxExample01 from "./Function_components/JsxExample01";
import JsxExample2 from "./JSX_Examples/JsxExample2";
import ALLExample from "./JSX_Examples/ALLExample";
import AllFunctionComponents from "./Function_components/AllFunctionComponents";
import AllStyleComponents from "./Style_components/AllStyleComponents";
import Alltask from "./Alltasks/Alltask";
import AllStateExample from "./StateinReact/AllStateExample";
import AllClassComponent from "./ClassComponents/AllClassComponent";
import AllProps from "./PropsAll/AllProps";
import Alllocalstorage from "./LocalStorageExample/Alllocalstorage";
import AllPractice from "./PracticeFolder/AllPractice";
import MapcrudExample from "./8_mapcrud/MapcrudExample";
import SecondCrudPractice from "./8_mapcrud/SecondCrudPractice";
import AllhookExample from "./9_Hooks/AllhookExample";
import AllProject from "./ClassComponents/10_Project/AllProject";
import AllForewardRefExamples from "./ForwardRefExamples/AllForewardRefExamples";
import Project01 from "./ClassComponents/10_Project/Project01";

export default function App() {
  return (
    <div>
      {/* <ALLExample /> */}
      {/* <AllFunctionComponents /> */}
      {/* Style All Components */}
      {/* All style components  */}
      <AllStyleComponents />
      {/* All task examples */}
      {/* <Alltask /> */}
      {/* All state examples */}
      {/* <AllStateExample /> */}
      {/* <AllClassComponent /> */}/{/* <AllProps /> */}
      {/* <AllProps /> */}
      {/* <Alllocalstorage /> */}
      {/* <AllPractice /> */}
      {/* <MapcrudExample /> */}
      {/* <SecondCrudPractice /> */}
      {/* <AllProject /> */}
      {/* <AllhookExample /> */}
      {/* <Project01 /> */}
      {/* <AllForewardRefExamples /> */}
    </div>
  );
}
