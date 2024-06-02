import React, { useEffect } from "react";
import { useState } from "react";

export default function SecondComponent(props) {
  const [name, setName] = useState("");
  const [mobile, SetMobilenumber] = useState("");
  const [PizzaName, setPizzaName] = useState("");
  const [order, setOrder] = useState([]);
  const [pastaName, setPastaname] = useState("");
  const [pizzaqty, setPizzaqty] = useState();
  const [pastaqty, setPastaqty] = useState();

  const [editindex, seteditindex] = useState(null);

  let [change, setchange] = useState(true);

  useEffect(() => {
    // it will call once in a program after refresh

    let allRecords = JSON.parse(localStorage.getItem("orders")) || [];
    setOrder(allRecords);
    console.log(allRecords);
  }, []);

  let neworder = { id: Date.now(), name, mobile, PizzaName };
  const handlesubmit = (e) => {
    e.preventDefault();
    if (editindex !== null) {
      console.log("update");
      let updateorders = [...order];
      updateorders[editindex] = {
        id: order[editindex].id,
        name,
        mobile,
        PizzaName,
      };
      setOrder(updateorders);
      localStorage.setItem("orders", JSON.stringify(updateorders));
    } else {
      setOrder([...order, neworder]);
      localStorage.setItem("orders", JSON.stringify([...order, neworder]));

      console.log(order);
      setName("");
      SetMobilenumber("");
      setPizzaName("");
    }
  };

  const handledelete = (index) => {
    console.log(`delete index =${index}`);

    let allnewData = order.filter((e, i) => i !== index);
    console.log(allnewData);
    setOrder(allnewData);
    localStorage.setItem("orders", JSON.stringify(allnewData));
  };

  const handleEdit = (index) => {
    setchange(!change);
    seteditindex(index);
    setName(order[index].name);
    setPizzaName(order[index].PizzaName);
    SetMobilenumber(order[index].mobile);
  };

  const handleUpdate = () => {
    // setchange(!change);
    // console.log(order[editindex]);
    let olddata = order[editindex];
    // console.log(olddata);
    // console.log(olddata);
    // setOrder([olddata]);
  };

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
              <p value={name} onChange={(e) => setName(e.target.value)}>
                Name : {props.name}
              </p>
              <p
                value={mobile}
                onChange={(e) => SetMobilenumber(e.target.value)}
              >
                Your Moile Num:{props.mobilenum}
              </p>
              <p
                value={PizzaName}
                onChange={(e) => setPizzaName(e.target.value)}
              >
                Pizza Item: {props.pizzaName}
              </p>
              <p
                value={pastaName}
                onChange={(e) => setPastaname(e.target.value)}
              >
                Pasta: {props.pastaName}
              </p>
              <p value={pizzaqty} onChange={(e) => setPizzaqty(e.target.value)}>
                pizza Qty:{props.pizzaQty}
              </p>
              <p value={pastaqty} onChange={(e) => setPastaqty(e.target.value)}>
                Pasta Qty:{props.pastaQty}
              </p>
              <p>Free items:{}</p>
              <p>Total price :{}</p>

              {/* <div>
                <form onSubmit={handlesubmit}>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={mobile}
                    placeholder="Enter Your mobile"
                    onChange={(e) => SetMobilenumber(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter Your PizzaName"
                    value={PizzaName}
                    onChange={(e) => setPizzaName(e.target.value)}
                  />

                  {change ? (
                    <button type="submit"> Submit</button>
                  ) : (
                    <button type="submit" onClick={handleUpdate}>
                      Update
                    </button>
                  )}
                </form>

                <table border={2} style={{ width: "100%" }}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>mobile</th>
                      <th>PizzaName</th>
                      <th colSpan={2}>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {order.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.mobile}</td>
                          <td>{e.PizzaName}</td>
                          <td>
                            <button onClick={() => handleEdit(i)}>Edit</button>
                          </td>
                          <td>
                            <button onClick={() => handledelete(i)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div> */}
            </div>
            <div className="modal-footer">
              {/* <button className="btn m-40">Cancel Order?</button> */}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlesubmit}
              >
                Confirm Order
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

      <div className="Billing">
        <h4>Your Bill</h4>
        <div id="invoiceholder">
          <div id="headerimage"></div>
          <div id="invoice" className="effect2">
            <div id="invoice-top">
              <div className="logo"></div>
              <div className="info">
                <h2>Michael Truong</h2>
                <p>
                  {" "}
                  hello@michaeltruong.ca <br />
                  289-335-6503
                </p>
              </div>
              <div className="title">
                <h1>Invoice #1069</h1>
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
                <h2>Client Name</h2>
                <p>
                  JohnDoe@gmail.com
                  <br />
                  555-555-5555
                  <br />
                </p>
              </div>

              <div id="project">
                <h2>Project Description</h2>
                <p>
                  Proin cursus, dui non tincidunt elementum, tortor ex feugiat
                  enim, at elementum enim quam vel purus. Curabitur semper
                  malesuada urna ut suscipit.
                </p>
              </div>
            </div>

            <div id="invoice-bot">
              <div id="table">
                <table>
                  <tr className="tabletitle">
                    <td className="item">
                      <h2>Item Description</h2>
                    </td>
                    <td className="Hours">
                      <h2>Qty</h2>
                    </td>
                    <td className="Rate">
                      <h2>Rate</h2>
                    </td>
                    <td className="subtotal">
                      <h2>Sub-total</h2>
                    </td>
                  </tr>
                  <tbody>
                    {order.map((e, i) => {
                      return (
                        <tr className="service" key={i}>
                          <td className="tableitem">
                            <p className="itemtext">{e.Name}</p>
                          </td>
                          <td className="tableitem">
                            <p className="itemtext">jsf</p>
                          </td>
                          <td className="tableitem">
                            <p className="itemtext">$75</p>
                          </td>
                          <td className="tableitem">
                            <p className="itemtext">$375.00</p>
                          </td>
                        </tr>
                      );
                    })}
                    {/* <tr className="service">
                      <td className="tableitem">
                        <p className="itemtext">{e.PizzaName}</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">5</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">$75</p>
                      </td>
                      <td className="tableitem">
                        <p className="itemtext">$375.00</p>
                      </td>
                    </tr> */}
                  </tbody>
                  {/* <tbody>
                    {order.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td>{e.id}</td>
                          <td>{e.name}</td>
                          <td>{e.mobile}</td>
                          <td>{e.PizzaName}</td>
                          <td>
                            <button onClick={() => handleEdit(i)}>Edit</button>
                          </td>
                          <td>
                            <button onClick={() => handledelete(i)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody> */}

                  {/* <tr class="service">
                      <td class="tableitem">
                        <p class="itemtext">Asset Gathering</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">3</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$75</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$225.00</p>
                      </td>
                    </tr> */}

                  {/* <tr class="service">
                      <td class="tableitem">
                        <p class="itemtext">Design Development</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">5</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$75</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$375.00</p>
                      </td>
                    </tr> */}

                  {/* <tr class="service">
                      <td class="tableitem">
                        <p class="itemtext">Animation</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">20</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$75</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$1,500.00</p>
                      </td>
                    </tr>

                    <tr class="service"> */}
                  {/* <td class="tableitem">
                        <p class="itemtext">Animation Revisions</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">10</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$75</p>
                      </td>
                      <td class="tableitem">
                        <p class="itemtext">$750.00</p>
                      </td>
                    </tr> */}

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
                    </tr>

                    <tr class="tabletitle"> */}
                  {/* <td></td>
                      <td></td>
                      <td class="Rate">
                        <h2>Total</h2>
                      </td>
                      <td class="payment">
                        <h2>$3,644.25</h2>
                      </td>
                    </tr> */}
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
                  expected within 31 days; please process this invoice within
                  that time. There will be a 5% interest charge per month on
                  late invoices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
