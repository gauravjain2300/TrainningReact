import React, { useEffect, useState } from "react";
import "./Allcss/FirstComponent.css";
import SecondComponent from "./SecondComponent";

export default function FirstComponent01() {
  const [menu, setMenu] = useState();
  const [pizza, setPizza] = useState();
  const [pasta, setPasta] = useState();
  const [order, setOrder] = useState();

  const [Name, setName] = useState();
  const [mobilenum, setMobilenum] = useState();
  const [choosePiza, SetChoosepizza] = useState();
  const [choosePasta, setchoosePasta] = useState();
  const [pizaQty, setPizzaqty] = useState();
  const [pastaQty, setPastaqty] = useState();

  const [Allorder, setAllorder] = useState();

  if (pizaQty >= 4) {
    console.log("You claimed Brownie");
  } else {
    console.log("You did't get offer");
  }

  useEffect(() => {
    let ForUse = JSON.parse(localStorage.getItem("FoodOrders")) || [];
    let Allpass = {
      Name,
      mobilenum,
      choosePiza,
      choosePasta,
      pizaQty,
      pastaQty,
    };

    ForUse[Allpass];
    localStorage.setItem("FoodOrders", JSON.stringify(ForUse));
    console.log(Allpass);
  }, []);
  const orderconfirm = () => {
    setOrder(!order);
  };

  const handlemenu = () => {
    setMenu(!menu);
  };

  const handlepiza = () => {
    setPizza(!pizza);
  };

  const handlepasta = () => {
    setPasta(!pasta);
  };

  const handleorder = () => {
    console.log(Name, mobilenum, choosePiza, choosePasta, pizaQty, pastaQty);
  };

  return (
    <div>
      <div>
        <div className="background-image">
          <div className="Allbuttons">
            <button onClick={handlemenu}>Menu</button>
            <button>Reset</button>
          </div>
          {menu && (
            <div className="text">
              <button onClick={handlepiza}>Pizza</button>
              <button onClick={handlepasta}> Pasta</button>
            </div>
          )}

          {pizza && (
            <div className="menu-container">
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img href="#" src="pizza-386717_1920.jpg" />
                  </div>
                  <div className="content">
                    <h3>Mashroom Pizza</h3>
                    <p>Price:599</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img href="#" src="pizza-5311269_1280.jpg" />
                  </div>
                  <div className="content">
                    <h3>7Chessey pizza </h3>
                    <p>Price:599</p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img href="#" src="italian-cuisine-6903774_1280.jpg" />
                  </div>
                  <div className="content">
                    <h3>Thin crust Pizza</h3>
                    <p>Price:599</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {pasta && (
            <div className="menu-container">
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img href="#" src="pexels-enginakyurt-1487511.jpg" />
                  </div>
                  <div className="content">
                    <h3>Mashroom Pizza</h3>
                    <p>
                      DIn publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img href="#" src="pexels-enginakyurt-3209101.jpg" />
                  </div>
                  <div className="content">
                    <h3>7Chessey pizza </h3>
                    <p>
                      DIn publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card">
                  <div className="image">
                    <img href="#" src="pexels-enginakyurt-1460872.jpg" />
                  </div>
                  <div className="content">
                    <h3>This is content</h3>
                    <p>
                      DIn publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ordering">
          <div className="items">
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Enter Your mobile num"
              onChange={(e) => {
                setMobilenum(e.target.value);
              }}
            />
            <select onChange={(e) => SetChoosepizza(e.target.value)}>
              <option selected value="0">
                Select Your Pizza
              </option>
              <option value="7 Cheesy Pizza">7Chessey Pizza</option>
              <option
                value="Mashroom Pizzaa"
                onChange={(e) => {
                  SetChoosepizza(e.target.value);
                }}
              >
                Mashroom Pizza
              </option>
              <option value="Thin Crust Pizza">Thin crust pizza</option>
            </select>

            <select onChange={(e) => setchoosePasta(e.target.value)}>
              <option selected value="0">
                Select Your Pasta
              </option>
              <option value="White sause Pasta"> White Sause Pasta</option>
              <option value="Red Sause Pasta">Red Sause Pasta</option>
              <option value="Speggati">Speggati </option>
            </select>
            <label htmlFor="">
              Pizza Qty:
              <input
                type="Number"
                placeholder="Qty"
                min={1}
                defaultValue={1}
                onChange={(e) => setPizzaqty(e.target.value)}
              />
            </label>

            <label htmlFor="">
              Pasta Qty:
              <input
                type="Number"
                placeholder="Qty"
                min={1}
                defaultValue={1}
                onChange={(e) => setPastaqty(e.target.value)}
              />
            </label>

            {/* {pizaQty >=4 ?

<P>You claimed offer<p/>:

<P>You  didnt claimed offer<P/>
} */}

            {pizaQty >= 4 ? (
              <p>Congrats You got the offer</p>
            ) : (
              <p> Can't Claim the offer</p>
            )}

            {/* Here is the second Component For the Dilouge Box */}
            <SecondComponent
              name={Name}
              mobilenum={mobilenum}
              pizzaName={choosePiza}
              pizzaQty={pizaQty}
              pastaQty={pastaQty}
              pastaName={choosePasta}
            />

            {}
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

                  <tr className="service">
                    <td className="tableitem">
                      <p className="itemtext">Communication</p>
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
                  </tr>

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
    // </div>
    // </div>
  );
}
