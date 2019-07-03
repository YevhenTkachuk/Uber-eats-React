import React from "react";
import "./Header.css";
import "./order-info/Order-info.css";
import { Autorisations } from "./Authorisation-cabinet/Autorisation-cabinet";
import { OrderInfo } from "./order-info/Order-info";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo-wrapper">
          <a
            className="header__logo"
            href="https://www.ubereats.com/uk-UA/"
          ></a>
        </div>
        <OrderInfo />
        <Autorisations />
      </div>
    </header>
  );
}
