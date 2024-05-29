import React, { useEffect } from "react";
import { useState } from "react";

export default function SecondComponent(props) {
  //   const [Allorder, setAllorder] = useState();

  //   useEffect(() => {
  //     let ForUse = JSON.parse(localStorage.getItem("FoodOrders")) || [];

  //     setAllorder(ForUse);
  //     console.log(ForUse);
  //   }, []);

  return (
    <div>
      <button
        type="button"
        className="btn "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Check Oder
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Name : {props.name}</p>
              <p>Your Moile Num:{props.mobilenum}</p>
              <p>Pizza Item: {props.pizzaName}</p>
              <p>Pasta: {props.pastaName}</p>
              <p>pizza Qty:{props.pizzaQty}</p>
              <p>Pasta Qty:{props.pastaQty}</p>
              <p>Free items:{}</p>
              <p>Total price :{}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
