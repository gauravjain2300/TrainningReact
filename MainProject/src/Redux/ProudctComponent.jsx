import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProudctComponent() {
  let dispatch = useDispatch();
  let { Products, status, error } = useSelector((state) => {
    return state.productkey;
  });
  return <div>ProudctComponent</div>;
}
