import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function ProductDisplay() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    myfetchRecord();
  }, []);

  const myfetchRecord = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    // console.log(response.data);
    setProductData(response.data);
  };

  return (
    <div>
      <table border={2}>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {productData.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>
                  <img src="" alt="" />
                </td>
                <td>{product.id}</td>
                <td>{product.id}</td>
                <td>{product.id}</td>
                <td>{product.id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
