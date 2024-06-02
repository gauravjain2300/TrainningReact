import React, { useEffect, useState } from "react";
import "./Allcss/FirstComponent.css";
import SecondComponent from "./SecondComponent";
import FunctionFirstComponent01 from "./ComponentForpractice/FunctionFirstComponent01";

export default function FirstComponent01() {
  const [menu, setMenu] = useState();
  const [pizza, setPizza] = useState();
  const [pasta, setPasta] = useState();
  const [order, setOrder] = useState();
  const [offer, setOffer] = useState();
  const [Name, setName] = useState();
  const [mobilenum, setMobilenum] = useState();
  const [choosePiza, SetChoosepizza] = useState();
  const [choosePasta, setchoosePasta] = useState();
  const [pizaQty, setPizzaqty] = useState();
  const [pastaQty, setPastaqty] = useState();
  // const [reset, setReset] = useState();
  const [Allorder, setAllorder] = useState();

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

  const handlereset = () => {
    setOffer(false);
    setPizza(false);
    setPasta(false);
    setMenu(false);
  };

  const handlepiza = () => {
    setPizza(true);
    setPasta(false);
  };

  const offers = () => {
    setOffer(true);
    setPizza(false);
    setPasta(false);
  };

  const handlepasta = () => {
    setPasta(true);
    setPizza(false);
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
            <button style={{ color: "#ee9b49" }} onClick={offers}>
              Offers
            </button>
            <button
              onClick={handlereset}
              style={{ color: "black", fontWeight: "bold" }}
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
          {menu && (
            <div className="text">
              <button onClick={handlepiza}>Pizza</button>
              <button onClick={handlepasta}> Pasta</button>
            </div>
          )}

          {offer && (
            <div>
              <h5
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "40px",
                  paddingTop: "50px",
                }}
              >
                Order Four items or above
                <br />
                And get a Choco brownie Free{" "}
              </h5>
              {/* <img
                src="chocobrownie.webp"
                alt=""
                style={{ width: "200px", borderRadius: "10px" }}
              /> */}
              <div className="menu-container">
                <div className="container">
                  <div className="card">
                    <div className="image">
                      <img href="#" src="chocobrownie.webp" />
                    </div>
                    <div className="content">
                      <h3>Choco brownie </h3>
                      <p>Only for Offers</p>
                    </div>
                  </div>
                </div>
              </div>
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
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum, optio, doloribus reiciendis nisi sit
                      quos eum quam distinctio ipsam dolorum, fuga officiis quae
                      reprehenderit. Aliquam ut vero commodi
                      temporibus!ChocolateChocolate
                    </p>
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
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum, optio, doloribus reiciendis nisi sit
                      quos eum quam distinctio ipsam dolorum, fuga officiis quae
                      reprehenderit. Aliquam ut vero commodi
                      temporibus!ChocolateChocolate
                    </p>
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
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum, optio, doloribus reiciendis nisi sit
                      quos eum quam distinctio ipsam dolorum, fuga officiis quae
                      reprehenderit. Aliquam ut vero commodi
                      temporibus!ChocolateChocolate
                    </p>
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
                    <h3>White Sause pasta</h3>
                    <p>Price:299</p>
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum, optio, doloribus reiciendis nisi sit
                      quos eum quam distinctio ipsam dolorum, fuga officiis quae
                      reprehenderit. Aliquam ut vero commodi
                      temporibus!ChocolateChocolate
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
                    <h3>Speggati </h3>
                    <p>Price:299</p>
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum, optio, doloribus reiciendis nisi sit
                      quos eum quam distinctio ipsam dolorum, fuga officiis quae
                      reprehenderit. Aliquam ut vero commodi
                      temporibus!ChocolateChocolate
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
                    <h3>Red Sause Pasta</h3>
                    <p>Price:299</p>
                    <p
                      style={{
                        color: "black",
                        fontSize: "12px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Asperiores rerum, optio, doloribus reiciendis nisi sit
                      quos eum quam distinctio ipsam dolorum, fuga officiis quae
                      reprehenderit. Aliquam ut vero commodi
                      temporibus!ChocolateChocolate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <FunctionFirstComponent01 />
      </div>
    </div>
  );
}
