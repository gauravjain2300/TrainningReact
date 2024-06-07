import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDisplay from "./ProductDisplay";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductDisplay />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}