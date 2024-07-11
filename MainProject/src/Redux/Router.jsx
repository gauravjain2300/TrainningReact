import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainRedux from "./MainRedux";
import { store } from "./app/store";
import ReduxComponents from "./ReduxComponents";
import TodoComponent from "./TodoComponent";
import ProjectExpense from "./ProjectExpense";

export default function Router() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<MainRedux />}></Route> */}
            {/* <Route path="/" element={<ReduxComponents />}></Route> */}
            {/* <Route path="/" element={TodoComponent}></Route> */}
            <Route path="/" element={<ProjectExpense />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
