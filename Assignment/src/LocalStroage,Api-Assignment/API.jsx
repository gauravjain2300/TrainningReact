import React, { useEffect, useState } from "react";
import "../ApiFetch/ApiFetch.css";

export default function API() {
  {
    const [data, setData] = useState();
    const ImageArray = [
      "Cartoonboy.jpg",
      "cartoon-character-sunglasses.jpg",
      "birthday.jpg",
      "ice.jpg",
      "backpack.jpg",

      "smiling.jpg",
      "Woman.jpg",

      "orangeboy.jpg",
      "purple.jpg",
      "Glasses.jpg",
    ];

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const res = await response.json();
      setData(res);
    };

    return (
      <div>
        {data ? (
          <div style={{ display: "flex" }}>
            <div className="container">
              {data.map((e, i) => {
                return (
                  <div className="card" key={i}>
                    <div className="image">
                      <img href="#" src={ImageArray[i]} />
                      <p style={{ color: "purple" }}>{e.id}</p>
                    </div>
                    <div className="content">
                      <h3>Name:{e.name}</h3>
                      <b>
                        {" "}
                        <p>Username :{e.username}</p>
                      </b>
                      <p>{e.email}</p>
                      {/* <p>{e.address}</p> */}
                      <span>{e.address.street}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <p>loading....</p>
        )}
      </div>
    );
  }
}
