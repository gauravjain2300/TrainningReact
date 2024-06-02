import React from "react";
import { useState } from "react";
import Funtion2Component from "./Funtion2Component";

export default function FunctionFirstComponent01() {
  const [name, setName] = useState("");
  const [mobilenum, setMobilenum] = useState("");
  const [choosePizza, SetChoosepizza] = useState("");
  const [choosePasta, setChoosePasta] = useState("");

  const [pizaQty, setPizzaqty] = useState("");
  const [pastaQty, setPastaqty] = useState("");
  const [submit, setSubmit] = useState(false);
  const [freeitem, setFreeitem] = useState("");
  const [data, setData] = useState();
  const [totalpastapricem, setTotalpastaPrice] = useState("");

  // const chocobrownie = pizaQty >= 4;
  // if (pizaQty >= 4) {
  //   freeitem("Congratioulation You got Choco brownie");
  //   console.log("");
  // } else {
  //   freeitem("");
  // }

  const handleSubmit = () => {
    setSubmit(!false);
    setData({
      name,
      mobilenum,
      choosePizza,
      choosePasta,
      pizaQty,
      pastaQty,
      freeitem,
      AllPrice,
      TotalPastaprice,
      TotalPizzaPrice,
      id: Date.now(),
    });

    // setData([...data, orderdata]);
  };

  const pastaPrice = 299;
  const pizzaPrice = 599;
  // let pastaPrice = 299;
  console.log();

  const TotalPastaprice = pastaPrice * pastaQty;
  const TotalPizzaPrice = pizzaPrice * pizaQty;

  const AllPrice = TotalPastaprice + TotalPizzaPrice;
  // // setTotalpastaPrice();
  // setTotalpastaPrice(TotalPastaprice);

  return (
    <div>
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
            <option value="Mashroom Pizzaa">Mashroom Pizza</option>
            <option value="Thin Crust Pizza">Thin crust pizza</option>
          </select>

          <select onChange={(e) => setChoosePasta(e.target.value)}>
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
          <h6>Total Amount:{AllPrice}</h6>

          <div className="Chocolate">
            <p onChange={(e) => setFreeitem(e.target.value)}>
              {pizaQty >= 4 ? (
                <div>
                  <p style={{ color: "white", fontSize: "30px" }}>
                    Here is Your choco brwonie
                    <br /> Enjoy your meal
                  </p>
                  <img src="chocobrownie.webp" alt="" className="Brownie" />
                </div>
              ) : (
                ""
              )}
            </p>
          </div>

          <button
            onClick={handleSubmit}
            type="button"
            className="btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>

          {/* Here is the second Component For the Dilouge Box */}
        </div>
        {submit && <Funtion2Component Data={data} Clickbtn={handleSubmit} />}
      </div>
    </div>
  );
}
