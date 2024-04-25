import React from "react";
import Admin from "./Admin";
import Supplier from "./Supplier";
import Customer from "./Customer";

export default function SwitchCase() {
  const userRole = "Customor";

  switch (userRole) {
    case "Admin":
      return <Admin />;

    case "Supplier":
      return <Supplier />;

    case "Customor":
      return <Customer />;
  }
}
