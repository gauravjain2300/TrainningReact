import React, { useEffect, useState } from "react";

export default function Funtion2Component(props) {
  // const [newname, setNewname] = useState("");
  // const [newnumber, setNewnumber] = useState("");
  // const [newpizza, setNewpizza] = useState("");
  // const [newpasta, setNewpasta] = useState("");
  // const [newpizzaqty, setNewpizzaqty] = useState("");
  // const [newpastaqty, setNewpastaqty] = useState("");
  // const [newfreeitem, setNewfreeitem] = useState("");
  const [confirmorder, setConfirmorder] = useState([]);
  let DataforDisplay = props.Data;
  console.log(DataforDisplay);

  useEffect(() => {
    // it will call once in a program after refresh
    let allRecords = JSON.parse(localStorage.getItem("Foodorders")) || [];
    setConfirmorder(allRecords);
    // console.log(allRecords);

    console.log("helloooo");
  }, []);

  // let neworder = {
  //   id: Date.now(),
  //   newname,
  //   newnumber,
  //   newpizza,
  //   newpasta,
  //   newpizzaqty,
  //   newpastaqty,
  //   newfreeitem,
  // };

  const handleconfirm = () => {
    let getDataInfo = props.Data;

    setConfirmorder([...confirmorder, getDataInfo]);
    // localStorage.setItem(
    //   "Foodorders",
    //   JSON.stringify([...confirmorder, neworder])
    localStorage.setItem(
      "Foodorders",
      JSON.stringify([...confirmorder, getDataInfo])
    );
  };

  return (
    <div>
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
                Your order
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p> Your Name:{props.Data.name}</p>
              <p> Your Mobile Num:{props.Data.mobilenum}</p>
              <p> Your Pizza item:{props.Data.choosePizza}</p>
              <p> Your Pasta item: {props.Data.choosePasta}</p>
              <p> Your Pizza Qty:{props.Data.pizaQty}</p>
              <p> Your Pasta Qty:{props.Data.pastaQty}</p>
              <p>
                Your Free item:
                {props.Data.pizaQty >= 4
                  ? "Congrats You got the offer"
                  : "No Free items"}
              </p>
              <p>Your Total Bill:{props.Data.AllPrice}</p>
            </div>
            <div className="modal-footer">
              {/* <button className="btn m-40">Cancel Order?</button> */}
              {/* <button
                type="button"
                className="btn btn-primary"
                onClick={handleconfirm}
              >
                Confirm Order
              </button> */}
              {/* <button onClick={handleconfirm}>Confirm Order</button> */}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleconfirm}
              >
                Confirm Order?
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel Order?
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>{props.Data.name}</h1> */}
      {/* <button onClick={handleconfirm}>Confirm</button> */}
      {/* {allRecords.map()=>{}} */}{" "}
      <div className="Billing">
        <h4>Your bill</h4>
        <div className="All-bills">
          {confirmorder.map((e, i) => (
            <div id="invoiceholder" key={i}>
              <div id="headerimage"></div>
              <div id="invoice" className="effect2">
                <div id="invoice-top">
                  <div className="logo"></div>
                  <div className="info">
                    <p></p>
                    <p></p>
                  </div>
                  <div className="title">
                    <h1>Invoice #{e.id}</h1>
                    <p>
                      Issued: May 27, 2015
                      <br />
                      Payment Due: June 27, 2015
                    </p>
                  </div>
                </div>

                <div id="invoice-mid">
                  <div className="clientlogo"></div>
                  <div className="info">
                    <p>{e.name}</p>
                    <p>{e.mobilenum}</p>
                  </div>

                  <div id="project">
                    {/* <h2>Project Description</h2> */}
                    {/* <p>
                      Proin cursus, dui non tincidunt elementum, tortor ex
                      feugiat enim, at elementum enim quam vel purus. Curabitur
                      semper malesuada urna ut suscipit.
                    </p> */}
                  </div>
                </div>

                <div id="invoice-bot">
                  <div id="table">
                    <table>
                      <tr className="tabletitle" border={2}>
                        <td className="item">
                          <h2>Item Description</h2>
                        </td>
                        <td className="Hours">
                          <h2>Qty</h2>
                        </td>
                        <td className="Rate">
                          <h2>Price per item</h2>
                        </td>
                        <td className="subtotal">
                          <h2>Sub-total</h2>
                        </td>
                        {/* <td className="">
                          <h2>Gaurav</h2>
                        </td> */}
                      </tr>

                      <tr className="service">
                        <td className="tableitem">
                          <p className="itemtext">{e.choosePizza}</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">{e.pizaQty}</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">599</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">{e.TotalPizzaPrice}</p>
                        </td>
                      </tr>
                      <tr className="service">
                        <td className="tableitem">
                          <p className="itemtext">{e.choosePasta}</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">{e.pastaQty}</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">299</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">{e.TotalPastaprice}</p>
                        </td>
                      </tr>

                      <tr className="service">
                        <td className="tableitem">
                          <p className="itemtext">
                            {props.Data.pizaQty >= 4 ? " Choco Brownie" : ""}
                          </p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">{e.pastaQty}</p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">
                            {props.Data.pizaQty >= 4 ? "Free" : ""}
                          </p>
                        </td>
                        <td className="tableitem">
                          <p className="itemtext">
                            {props.Data.pizaQty >= 4 ? "0" : ""}
                          </p>
                        </td>
                      </tr>

                      {/* <tr class="service">
                        <td class="tableitem">
                          <p class="itemtext"></p>
                        </td>
                        <td class="tableitem">
                          <p class="itemtext">HST</p>
                        </td>
                        <td class="tableitem">
                          <p class="itemtext">13%</p>
                        </td>
                        <td class="tableitem">
                          <p class="itemtext">$419.25</p>
                        </td>
                      </tr> */}

                      <tr class="tabletitle">
                        <td></td>
                        <td></td>
                        <td class="Rate">
                          <h2>Total</h2>
                        </td>
                        <td class="payment">
                          <h2>{e.AllPrice}</h2>
                        </td>
                      </tr>
                    </table>
                  </div>

                  <form
                    action="https://www.paypal.com/cgi-bin/webscr"
                    method="post"
                    target="_top"
                  >
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="QRZ7QTM9XRPJ6"
                    />
                    <input
                      type="image"
                      src="http://michaeltruong.ca/images/paypal.png"
                      border="0"
                      name="submit"
                      alt="PayPal - The safer, easier way to pay online!"
                    />
                  </form>

                  <div id="legalcopy">
                    <p className="legal">
                      <strong>Thank you for your business!</strong> Payment is
                      expected within 31 days; please process this invoice
                      within that time. There will be a 5% interest charge per
                      month on late invoices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>
    </div>
  );
}
